import React from 'react'

const AddBlog = () => {
    return (
        <>
            <div className='container'>
                <h2 className='text-center my-3'>Add Blog</h2>
                <div className='col-md-12 my-3 d-flex items-center justify-content-center'>
                    <div className='row'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                                <select className="form-control" name='category'>
                                    <option disabled>Select Category</option>
                                </select>
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="">Description</label>
                                <textarea name="description" placeholder='Blog description' className='form-control' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className='form-label'>Thumbnail</label>
                                <input className='form-control' name='thumbnail' placeholder='select thumbnail' type="file" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBlog