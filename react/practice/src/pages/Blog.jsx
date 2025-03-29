import React, { useState } from 'react'

const Blog = () => {
    const [blog, setBlog] = useState({})
    const [articles, setArticles] = useState([])
    return <>

        {/* {blog} */}
        <pre>{JSON.stringify(blog)}</pre>

        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Blog App</div>
                        <div class="card-body">
                            <input
                                className='form-control my-2'
                                onChange={e => setBlog({ ...blog, title: e.target.value })}
                                type="text" placeholder='enter task' />
                            <input
                                className='form-control my-2'
                                onChange={e => setBlog({ ...blog, hero: e.target.value })}
                                type="text" placeholder='enter hero url' />
                            <textarea
                                className='form-control my-2'
                                onChange={e => setBlog({ ...blog, desc: e.target.value })}
                                placeholder='enter desc'></textarea>
                            <button className='btn btn-dark w-100 btn-lg' onClick={e => setArticles([...articles, blog])}>add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container">
            {/* {
                articles.map(item => <div class="card">
                    <div class="card-body">
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>
                </div>)
            } */}

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>desc</th>
                        <th>hero</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map(item => <tr>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>{item.hero}</td>
                            <td>
                                <button
                                    onClick={e => setArticles(articles.filter(arg => arg.desc !== item.desc))}
                                    type="button" class="btn btn-danger">delete {item.title}</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default Blog