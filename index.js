let express = require("express")
let dotenv = require("dotenv");
const dbConnection = require("./config/dbConnect");
const { authRoute } = require("./route/authRoute");

// middlware configration
dotenv.config(); // Load environment variables from .env file
// db connection
dbConnection()

let PORT = process.env.PORT || 8000
let hostName = process.env.HOST_NAME || '127.0.0.8'

let app = express()

// middleware
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Hello, I am Server")
})

// for setting form data into req
//app.use(express.urlencoded({extended:true}))

// route
app.use('/auth/v1',authRoute)


// Start the server
app.listen(PORT, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${PORT}`);
})
