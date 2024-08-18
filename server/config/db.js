import mongoose from "mongoose";

const conn = async () => {
    const res = await mongoose.connect("mongodb://localhost:27017/blog-mern")

    if (res) {
        console.log("Database connected");

    }
}

export default conn;