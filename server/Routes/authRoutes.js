import express from "express"
import multer from "multer";
import { userLogin, userReg } from "../Controllers/authController.js";
import { addBlog, getAllBlogs, getBlog } from "../Controllers/blogController.js";
import { addNewCategory, getAllCategories } from "../Controllers/categoryController.js";
import checkAuthorization from "../Middlewares/authMiddleware.js";

const router = express.Router()

router.post("/user/register", userReg)
router.post("/user/login", userLogin)


// Configure storage options
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload/'); // Specify the directory to save the uploaded files
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Protected Blog Routes
router.get("/get/allblogs", checkAuthorization, getAllBlogs)
router.get("/get/blog/:id", checkAuthorization, getBlog)
router.post("/add/blog", checkAuthorization, upload.single("thumbnail"), addBlog)

// Protected Blog Routes

router.get("/get/categories", checkAuthorization, getAllCategories)
router.post("/add/category", checkAuthorization, addNewCategory)



export default router;