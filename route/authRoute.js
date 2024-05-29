let express = require("express")
const { registrationController, loginController } = require("../controller/authController")


// Router level middleware
let route = express.Router()

// registration || POST
route.post("/signup", registrationController)

// Login || POST
route.post("/signin", loginController)


module.exports = { authRoute: route }