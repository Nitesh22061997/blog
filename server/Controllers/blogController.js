import blogModel from "../Models/blogModel.js"


export const getAllBlogs = async (req, res) => {
    try {
        const fetchAllBlogs = await blogModel.find({ user: req.user._id })
        if (fetchAllBlogs) {
            return res.status(201).json(fetchAllBlogs)
        }
        else {
            return res.status(400).json({ message: "There is no blog here" })
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}
export const getBlog = async (req, res) => {
    const { id } = req.params
    try {
        if (id) {
            const fetchBlog = await blogModel.findById(id)
            return res.status(200).json(fetchBlog)
        }
        else {
            return res.status(400).json({ message: "Invalid URL" })
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
export const addBlog = async (req, res) => {
    const { title, category, description } = req.body

    try {
        if (title && category && description) {
            const addedBlog = new blogModel({
                title: title,
                category: category,
                description: description,
                thumbnail: req.file.filename,
                user: req.user._id
            })

            const savedBlog = await addedBlog.save()

            if (savedBlog) {
                return res.status(200).json({ message: "Blog added successfully" })
            }
        }
        else {
            return res.status(400).json({ message: "All fields are required" })
        }

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}