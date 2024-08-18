import categoryModel from "../Models/categoryModel.js"

export const getAllCategories = async (req, res) => {
    try {
        const fetchAllCategory = await categoryModel.find({})
        if (fetchAllCategory) {
            return res.status(400).json(fetchAllCategory)
        }
        else {
            return res.status(400).json({ message: "Empty category" })
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}
export const addNewCategory = async (req, res) => {
    const { title } = req.body;
    try {
        if (title) {
            const newCategory = new categoryModel({
                title
            })
            const savedCategory = await newCategory.save()

            if (savedCategory) {
                return res.status(201).json({ message: "Category added successfully" })

            }
        }
        else {
            return res.status(400).json({ message: "all fields are required" })
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}