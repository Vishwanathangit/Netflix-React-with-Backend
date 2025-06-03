const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors({
    origin: "https://netflix-react-with-backend-48qs.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
var mobile = "1234567890"
var pass = "123"
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get("/login", function (req, res) {
    console.log(req.query.mobile)
    if (req.query.mobile === mobile && req.query.password === pass) {
        res.send(true)
    } else {
        res.send(false)
    }
})
app.listen(3000, function () {
    console.log("Server Started...")
})