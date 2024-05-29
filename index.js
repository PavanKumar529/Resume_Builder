let express = require("express")
let dotenv = require("dotenv");
const dbConnection = require("./config/dbConnect");

//middlware configration
dotenv.config(); // Load environment variables from .env file
// db connection
dbConnection()

let PORT = process.env.PORT || 8000
let hostName = process.env.HOST_NAME || '127.0.0.8'

let app = express()


app.get("/", (req, res)=>{
    res.send("Hello, I am Server")
})

// Start the server
app.listen(PORT, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${PORT}`);
})