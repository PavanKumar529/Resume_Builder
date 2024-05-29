let express = require("express")
const { registrationController } = require("../controller/authController")


// Router level middleware
let route = express.Router()

// registration || POST
route.post("/signup", registrationController)

module.exports = { authRoute: route }