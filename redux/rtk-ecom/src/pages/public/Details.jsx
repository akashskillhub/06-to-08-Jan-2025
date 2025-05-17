import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetPublicProductDetailsQuery } from '../../redux/apis/public.api'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/public.slice'

const Details = () => {
    const dispatch = useDispatch()
    const { skillhub } = useParams()
    const { data } = useGetPublicProductDetailsQuery(skillhub)

    return <>

        {
            data && <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <img src={data.image} height={300} alt="" />
                        <hr />
                        <button onClick={e => dispatch(addToCart(data))} type="button" class="btn btn-primary">Add To Cart</button>
                    </div>
                    <div className="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h4>{data.name}</h4>
                                <h6>{data.price}</h6>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        }

    </>
}

export default Details