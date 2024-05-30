let slugify = require("slugify")
let registration = require("../models/registrationModel")
const { accessTokenGenrator, refreshTokenGenrator } = require("../helper/authToken")

let registrationController = async (req,res) => {
    let { name, phone, email, password, gender } = req.body

    if(!name || !phone || !email || !password || !gender) {
        return res.status(500).send({message: "All fields are required* "})
    }
    else {
        let result = await new registration({slug: slugify(name), ...req.body}).save()
        if(result) {
            res.status(201).send({message: "Successfully Regitered", user: result})           
        }
        else {
            return res.status(500).send({message: "All fields are required* "})
        }
    }
}

let loginController = async (req, res) => {
    let { email, password } = req.body

    if(!email || !password) {
        return res.status(500).send({message: "All fields is required* ", sucess: false})
    }
    else {
        let availableUser = await registration.findOne({email: email})

        if(availableUser) {
            let validUser = await availableUser.comparePassword(password, availableUser.password)

            if(validUser) {
            //    res.status(200).send({ok: true})
               // access token and refresh token
               let accessToken = await accessTokenGenrator(availableUser.id);
               let refreshToken = await refreshTokenGenrator(availableUser.id);
               availableUser.addToken(accessToken)
               res.status(200).send({ access: accessToken, refresh: refreshToken })
            }
            else {
                res.status(500).send({message:"Either password or email is wrong"})
            }
        }
        else {
            return res.status(200).send({message:"User is not Registered", success: false})
        }
    }
}

let verifyController = async (req, res) => {
    res.json({ok: "done"})
}

module.exports={registrationController, loginController, verifyController}