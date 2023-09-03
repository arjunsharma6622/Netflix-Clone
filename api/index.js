const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")

const cors = require("cors")



dotenv.config()

const PORT = 8000
const DB_URL = process.env.DB_URL

app.use(cors(
    {
        origin: "*",

    }
))
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/movie", movieRoute)
app.use("/api/lists", listRoute)



function errorMiddleware(err, req, res, next) {
    console.error("An error occurred:", err);

    // Handle specific error cases
    if (err.name === "UnauthorizedError") {
        return res.status(401).json({ error: "Unauthorized" });
    }

    // Handle other errors
    res.status(500).json({ error: "An internal server error occurred" });
}

module.exports = errorMiddleware;

app.use(errorMiddleware)

//DB Connection
mongoose.connect(DB_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {
    console.log("DB connected")
})
.catch((err) => {
    console.log("DB connection Error : " + err )
})



//Listening to port
app.listen(PORT, () => {
    console.log(`Server connected at port ${PORT}`)
})