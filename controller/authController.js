let slugify = require("slugify")
let registration = require("../models/registrationModel")

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
            return res.status(500).send({message: "All fields are required*"})
        }
    }
}

module.exports={registrationController}