import express from "express";
import conn from "./config/db.js";
import authRoutes from "./Routes/authRoutes.js";
import cors from "cors";

const PORT = 9000;

// Initialize Express app
const app = express();

// Connect to the database
conn();

// {MIDDLEWARE}
// Parse incoming JSON requests
app.use(express.json());
// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
