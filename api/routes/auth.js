const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register",async function(req,res){
    const newUser = new User({
        email:req.body.email,
        username:req.body.username,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),   
    });

    try{
        const user = await newUser.save();
        res.status(201).json(user);
    }catch(err) {
        res.status(500).json(err);
    }
});

// Login
router.post("/login", async function(req, res){
    try{
        const user = await User.findOne({ email: req.body.email});
        !user && res.status(401).json("Wrong Username or Password!!!");

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const orginalPassword = bytes.toString(CryptoJS.enc.Utf8);

        orginalPassword !== req.body.password &&
            res.status(401).json("Wrong Username or Password!!!");

            const accessToken = jwt.sign
            ({id: user._id, isAdmin: user.isAdmin},
              process.env.SECRET_KEY,
              { expiresIn: "7d"}
            );

        const { password, ...info} = user._doc;

        res.status(200).json({...info, accessToken });
    } catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;