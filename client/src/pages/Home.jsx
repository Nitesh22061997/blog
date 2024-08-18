import React from 'react'

const Home = () => {
    return (
        <>
            <div>
                <div className="container mt-4">
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Welcome to My Blog</h1>
                            <p className="col-md-8 fs-4">Explore insightful articles on various topics, written by passionate bloggers.</p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Start Reading</a>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <img src="https://via.placeholder.com/350x150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Blog Post Title 1</h5>
                                    <p className="card-text">A brief description of the blog post content.</p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <img src="https://via.placeholder.com/350x150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Blog Post Title 2</h5>
                                    <p className="card-text">A brief description of the blog post content.</p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <img src="https://via.placeholder.com/350x150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Blog Post Title 3</h5>
                                    <p className="card-text">A brief description of the blog post content.</p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Home