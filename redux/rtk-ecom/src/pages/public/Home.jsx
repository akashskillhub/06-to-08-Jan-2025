import React from 'react'
import { useGetPublicProductsQuery } from '../../redux/apis/public.api'
import { Link } from 'react-router-dom'

const Home = () => {
    const { data } = useGetPublicProductsQuery()
    return <>
        <Hero data={data} />
        <ProductList data={data} />
    </>
}

export default Home

const Hero = ({ data }) => {
    return <>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
            <div class="carousel-inner">
                {
                    data && data.map((item, i) => <div class={`carousel-item bg-secondary ${i === 0 && "active"}`}>
                        <img src={item.image} alt="" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{item.name}</h5>
                            <p>{item.desc}</p>
                        </div>
                    </div>)
                }
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </>
}

const ProductList = ({ data }) => {
    return <>
        <div className="container">
            <div className="row">
                {
                    data && data.map(item => <div className="col-sm-3">
                        <Link to={`/details/${item.id}`} class="card">
                            <div class="card-body">
                                <img src={item.image} className='card-img-top' alt="" />
                                <div className='d-flex justify-content-between mt-3'>
                                    <h6>{item.name}</h6>
                                    <h6>{item.price}</h6>
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    </>
}