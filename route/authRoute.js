let express = require("express")
const { registrationController, loginController, verifyController, logoutController } = require("../controller/authController")
const { verifyToken } = require("../helper/authToken")

// Router level middleware
let route = express.Router()

// registration || POST
route.post("/signup", registrationController)

// Login || POST
route.post("/signin", loginController)

// token || GET
route.get("/token", verifyToken, verifyController)

// logout || GET
route.get("/logout/:id", logoutController)

module.exports = { authRoute: route }
