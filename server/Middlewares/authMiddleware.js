import jwt from "jsonwebtoken"
import authModel from "../Models/authModel.js";

const checkAuthorization = async (req, res, next) => {

    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
        try {
            token = authorization.split(" ")[1];

            const { userID } = jwt.verify(token, "secretkeyhai")

            req.user = await authModel.findById(userID).select("--pasword")
            next();
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized access" })
        }
    }
    else {
        return res.status(401).json({ message: "Unauthorized access" })
    }
}


export default checkAuthorization;