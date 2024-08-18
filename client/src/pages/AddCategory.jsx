import React from 'react'

const AddCategory = () => {
    return (
        <>

            <div className='container'>
                <h2 className='text-center my-3'>Add Category</h2>
                <div className='col-md-12 my-3 d-flex items-center justify-content-center'>
                    <div className='row'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                <input name="title" placeholder='Enter here...' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCategory