const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

class AuthController {
    async register(req, res) {

        const email = req.body.email;
        let password = req.body.password;
        
        //Checking is email and password exist
        if(email == undefined ||  password == undefined) {
            return res.status(400).send("Enter Email and Password");
        }
        
        //Checking if the user os already in the database
        const loginExist = await User.findOne({email: req.body.email});
        if(loginExist) return res.status(400).send("Login already exists");

        //Checking is email and password has at least 6 characters
        if(email.length < 6 || password.length < 6){
            return res.status(400).send("Email and Password have to haveat least 6 characters");
        }
 
         //HASH THE PASSWORD
         const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(req.body.password, salt);
 
         //Create a new user
        password = hashedPassword;
 
         let user;
 
         try {
             user = new User({email, password});
             await user.save();
         }catch(err) {
             return res.status(422).json({message: err.message});
         }
         const token = jwt.sign({_id: user.email}, process.env.TOKEN_SECRET);
         res.header('auth-token',token).send(token);


    }
    async login(req, res) {

        //Checking if the email exists
        const user = await User.findOne({email: req.body.email});
        if (!user) return res.status(400).send('Email or password is wrong!');

        //Checking if the PASSWORD IS CORRECT
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send('Email or password is wrong');

        //Create and assign a token
        const token = jwt.sign({_id: user.email}, process.env.TOKEN_SECRET);

        res.header('auth-token',token).send(token);
    }
    async token(req, res){
        const token = req.header('authorization');
        let decoded = jwt.decode(token);
        let creator = decoded.email

        const newToken = jwt.sign({_id: creator}, process.env.TOKEN_SECRET);

        res.status(200).send(newToken);
    }
}

module.exports = new AuthController();