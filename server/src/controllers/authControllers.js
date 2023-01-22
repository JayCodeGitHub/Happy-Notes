const User = require('../models/user');

class AuthController {
    async register(req, res) {

        //Checking if the user os already in the database
        const loginExist = await User.findOne({email: req.body.email});
        if(loginExist) return res.status(400).send("Login already exists");

        //Create a new user
        const email = req.body.email;
        const password = req.body.password;

        let user;

        try {
            user = new User({email, password});
            await user.save();
        }catch(err) {
            return res.status(422).json({message: err.message});
        }
        res.status(200).json("register");
    }
    async getUser(req, res) {
        res.status(200).json("auth");

    }
}

module.exports = new AuthController();