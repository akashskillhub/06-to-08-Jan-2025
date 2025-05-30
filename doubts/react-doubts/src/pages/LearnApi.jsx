import React, { useEffect, useState } from 'react'
import { useAddProductsMutation, useGetProductsQuery } from '../redux/product.api'

const LearnApi = () => {
    const { data } = useGetProductsQuery()
    const [createProduct] = useAddProductsMutation()
    return <>
        <div>LearnApi</div>
        <button onClick={e => createProduct({ brand: "apple" })}>add</button>
        <hr />
        {
            data && data.map(item => <h1>{item.brand}</h1>)
        }
    </>

}

export default LearnApi