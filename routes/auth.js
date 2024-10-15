const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {

    res.render("auth/login",{
    })
})

router.get("/login", (req,res) => {
res.redirect('/auth');
})


router.get("/sign-up", (req,res) => {

    res.render("auth/signUp",{
    })
})


module.exports = router;