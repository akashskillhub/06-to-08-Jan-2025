import { useFormik } from 'formik'
import * as yup from 'yup'
import handleClasses from '../../share/handleClasses'
import { useDispatch, useSelector } from 'react-redux'
import { usePlaceOrderMutation } from '../../redux/apis/public.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { emptyCart } from '../../redux/slices/public.slice'

const Checkout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)
    const { cart } = useSelector(state => state.public)

    const [placeOrder, { isSuccess }] = usePlaceOrderMutation()
    const formik = useFormik({
        initialValues: {
            address: "",
            mode: "cod",
        },
        validationSchema: yup.object({
            address: yup.string().required(),
            mode: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            placeOrder({ ...values, user: user.id, cart })
            resetForm()
        }
    })

    const handlePrice = () => {
        const price = cart.reduce((sum, item) => sum + (item.qty * item.price), 0)
        const discount = price * 5 / 100
        const total = price - discount
        return { price, discount, total }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("order place success")
            dispatch(emptyCart())
            navigate("/success")
        }
    }, [isSuccess])
    return <div className='container mt-5'>
        <div class="card">
            <div class="card-header">Checkout</div>
            <div class="card-body">
                <form onSubmit={formik.handleSubmit}>
                    <textarea
                        {...formik.getFieldProps("address")}
                        placeholder='address'
                        className={handleClasses(formik, "address")}></textarea>
                    <span className="invalid-feedback">{formik.errors.address}</span>

                    <input checked id='cod' type="radio" className='form-check-input' />
                    <label htmlFor="cod">COD</label>
                    <hr />
                    <button type="submit" class="btn btn-primary">Pay {handlePrice().total} on Delivery </button>
                </form>
            </div>
        </div>
    </div>
}

export default Checkout