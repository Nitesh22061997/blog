import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">My Blog</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/add-blog">Add  Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add-category">Add Category</Link>
                            </li>
                        </ul>
                        <div className='div-inline d-flex mx-auto my-2 my-lg-0'>

                            <Link className="nav-link mx-2" to="/login"><button className='btn btn-primary'>Login</button></Link>
                            <Link className="nav-link mx-2" to="/register"><button className='btn btn-primary'>Register</button></Link>


                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header