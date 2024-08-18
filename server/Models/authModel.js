import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
})

const authModel = new mongoose.model("users", authSchema)

export default authModel;