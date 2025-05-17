import { useFormik } from 'formik'
import * as yup from 'yup'
import handleClasses from '../../share/handleClasses'
import { useAddProductMutation, useGetProductQuery, useDeleteProductMutation, useUpdateProductMutation } from '../../redux/apis/admin.api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Product = () => {
    const [pagi, setPagi] = useState({ start: 0, limit: 2 })
    const [select, setSelect] = useState()
    const [createAdmin, { isSuccess: addSuccess }] = useAddProductMutation()
    const [modifyAdmin, { isSuccess: updateSuccess }] = useUpdateProductMutation()
    const [removeAdmin, { isSuccess: deleteSuccess }] = useDeleteProductMutation()
    const { data } = useGetProductQuery(pagi)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: select ? select.name : "",
            price: select ? select.price : "",
            desc: select ? select.desc : "",
            image: select ? select.image : "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            price: yup.string().required(),
            desc: yup.string().required(),
            image: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            if (select) {
                modifyAdmin({ ...values, id: select.id })
                setSelect(null)

            } else {

                createAdmin(values)
            }
            resetForm()
        }
    })

    useEffect(() => {
        if (addSuccess) {
            toast.success("product create success")
        }
    }, [addSuccess])

    useEffect(() => {
        if (updateSuccess) {
            toast.success("product update success")
        }
    }, [updateSuccess])

    useEffect(() => {
        if (deleteSuccess) {
            toast.success("product remove success")
        }
    }, [deleteSuccess])

    return <>

        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Product</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input className={handleClasses(formik, "name")}{...formik.getFieldProps("name")} type="text" placeholder='enter name' id="" />
                                    <span className='invaild-feedback'>{formik.errors.name}</span>
                                </div>
                                <div>
                                    <input className={handleClasses(formik, "price")}{...formik.getFieldProps("price")} type="text" placeholder='enter price' id="" />
                                    <span className='invaild-feedback'>{formik.errors.price}</span>
                                </div>
                                <div>
                                    <input className={handleClasses(formik, "desc")}{...formik.getFieldProps("desc")} type="text" placeholder='enter desc' id="" />
                                    <span className='invaild-feedback'>{formik.errors.desc}</span>
                                </div>
                                <div>
                                    <input className={handleClasses(formik, "image")}{...formik.getFieldProps("image")} type="text" placeholder='enter imgage' id="" />
                                    <span className='invaild-feedback'>{formik.errors.image}</span>
                                </div>
                                {
                                    select
                                        ? <button type="submit" class="btn btn-primary">update</button>
                                        : <button type="submit" class="btn btn-primary">Add</button>
                                }

                            </form>
                        </div>
                    </div>

                    <select
                        class="form-select my-3"
                        value={pagi.limit}
                        onChange={e => setPagi({ start: 0, limit: e.target.value })}
                    >
                        <option selected disabled>Choose Limit</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>

                    <div className='my-2'>
                        {
                            data && [...Array(Math.ceil(data.total / pagi.limit)).keys()].map(item => <button className='btn btn-sm btn-outline-primary me-2' onClick={e => setPagi({ ...pagi, start: item * pagi.limit })}>{item}</button>)
                        }
                    </div>
                    <table class="table table-dark table-striped table-hover ">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>price</th>
                                <th>desc</th>
                                <th>image</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.result.map(item => <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.desc}</td>
                                    <td>
                                        <img src={item.image} height={50} alt="" />
                                    </td>
                                    <td>
                                        <button onClick={e => setSelect(item)}>Edit</button>
                                        <button onClick={e => removeAdmin(item.id)}>Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    </>
}

export default Product