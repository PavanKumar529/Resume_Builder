let express = require("express")
const { registrationController, loginController, verifyController, logoutController, logoutFromAllDeviceController, forgetPasswordController } = require("../controller/authController")
const { verifyToken } = require("../helper/authToken")

// Router level middleware
let route = express.Router()

// registration || POST
route.post("/signup", registrationController)

// Login || POST
route.post("/signin", loginController)

// logoutCurrentDevice || GET
route.get("/logout/:id", logoutController)

// logoutAllDevices || GET
route.get("/all-logout/:id", logoutFromAllDeviceController)

// forgetPassword || POST
route.post("/forget-password", forgetPasswordController)

// token || GET
route.get("/token", verifyToken, verifyController)

module.exports = { authRoute: route }
