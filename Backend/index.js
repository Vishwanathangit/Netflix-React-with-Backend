const express = require("express");
const cors = require("cors");

const app = express();

// Allow CORS from the frontend
app.use(cors({
    origin: "https://netflix-react-with-backend-48qs.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

// Dummy login credentials
const mobile = "1234567890";
const pass = "123";

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Login route (using GET with query params, not recommended for passwords in real apps)
app.get("/login", async (req, res) => {
    try {
        const { mobile: inputMobile, password } = req.query;
        console.log("Login attempt from mobile:", inputMobile);

        if (inputMobile === mobile && password === pass) {
            return res.send(true); // Login successful
        } else {
            return res.send(false); // Invalid credentials
        }
    } catch (err) {
        console.error(`Error in Login - ${err.message}`);
        return res.status(500).json({
            message: 'Internal Server Error',
            error: err.message,
            success: false
        });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server Started on port 3000...");
});
