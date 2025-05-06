import clsx from 'clsx'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useAddProductMutation, useDeleteProductMutation, useGetProductsQuery, useUpdateProductMutation } from '../redux/product.api'
import { useState } from 'react'

const Product = () => {
    const [modifyProduct] = useUpdateProductMutation()

    const [selectedProduct, setSelectedProduct] = useState()

    const [createProduct, { isSuccess }] = useAddProductMutation()
    const { data } = useGetProductsQuery()
    const [removeProduct] = useDeleteProductMutation()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedProduct ? selectedProduct.name : "",
            hero: selectedProduct ? selectedProduct.hero : "",
            desc: selectedProduct ? selectedProduct.desc : "",
            price: selectedProduct ? selectedProduct.price : "",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            hero: yup.string().required(),
            desc: yup.string().required(),
            price: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            if (selectedProduct) {
                modifyProduct({ ...values, id: selectedProduct.id })
                setSelectedProduct(null)
            } else {
                createProduct(values)
            }
            resetForm()
        }
    })

    const handleClasses = key => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[key] && formik.errors[key],
        "is-valid": formik.touched[key] && !formik.errors[key],
    })
    return <>
        <div className="container">
            <div className="card">
                <div className="card-header">Product CRUD</div>
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input className={handleClasses("name")} {...formik.getFieldProps("name")} type="text" placeholder='name' />
                            <span className="invalid-feedback">{formik.errors.name}</span>
                        </div>
                        <div>
                            <input className={handleClasses("hero")} {...formik.getFieldProps("hero")} type="text" placeholder='hero' />
                            <span className="invalid-feedback">{formik.errors.hero}</span>
                        </div>
                        <div>
                            <input className={handleClasses("desc")} {...formik.getFieldProps("desc")} type="text" placeholder='desc' />
                            <span className="invalid-feedback">{formik.errors.desc}</span>
                        </div>
                        <div>
                            <input className={handleClasses("price")} {...formik.getFieldProps("price")} type="text" placeholder='price' />
                            <span className="invalid-feedback">{formik.errors.price}</span>
                        </div>
                        {
                            selectedProduct
                                ? <button type="submit" class="btn btn-warning mt-3">update</button>
                                : <button type="submit" class="btn btn-primary mt-3">Add</button>
                        }

                    </form>
                </div>
            </div>
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>hero</th>
                        <th>desc</th>
                        <th>price</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(item => <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <img src={item.hero} height={50} alt="" />
                            </td>
                            <td>{item.desc}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={e => setSelectedProduct(item)}>edit</button>
                                <button onClick={e => removeProduct(item.id)}>remove</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    </>
}

export default Product