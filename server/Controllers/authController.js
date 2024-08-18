import authModel from "../Models/authModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const userReg = async (req, res) => {
    const { name, email, password } = req.body

    try {
        if (name && email && password) {
            const user = await authModel.findOne({ email: email })

            if (!user) {
                // hashing password for security
                const hashedPassword = await bcrypt.hash(password, 10)

                // save user
                const newUser = authModel({
                    name,
                    email,
                    password: hashedPassword
                })

                const savedUser = await newUser.save()

                if (savedUser) {
                    return res.status(201).json({ message: "User registered successfully" })
                }
            }
            else {
            }
        }
        else {
            return res.status(400).json({ message: "All fields are required" })
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email && password) {
            const emailUser = await authModel.findOne({ email: email })

            if (emailUser) {
                const isMatch = await bcrypt.compare(password, emailUser.password)

                // generating token while logging in
                if (isMatch) {
                    const token = jwt.sign({ userID: emailUser._id }, "secretkeyhai", { expiresIn: "2d" });

                    return res.status(200).json({
                        message: "Login successful",
                        token,
                        name: emailUser.name
                    });
                }
                else {
                    return res.status(400).json({ message: "Wrong credentials" })

                }
            }
            else {
                return res.status(400).json({ message: "Email Not Found" })
            }
        }
        else {
            return res.status(400).json({ message: "All fields are required" })
        }

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }

}