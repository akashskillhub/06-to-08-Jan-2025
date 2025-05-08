import React from 'react'

const Products = () => {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Product</div>
                        <div class="card-body">
                            <form>
                                <div>
                                    <input type="text" placeholder='enter name' />
                                    <span className="invalid-feedback"></span>
                                </div>
                                <div>
                                    <input type="text" placeholder='enter price' />
                                    <span className="invalid-feedback"></span>
                                </div>
                                <div>
                                    <input type="text" placeholder='enter image' />
                                    <span className="invalid-feedback"></span>
                                </div>
                                <div>
                                    <input type="text" placeholder='enter desc' />
                                    <span className="invalid-feedback"></span>
                                </div>
                                <button type="submit" class="btn btn-primary">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Products