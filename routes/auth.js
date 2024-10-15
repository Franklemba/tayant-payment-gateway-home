const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {

    res.render("auth/login",{
    })
})

router.get("/login", (req,res) => {
res.redirect('/auth');
})


router.post("/login", (req,res) => {
    const { email , password } = req.body;

    try{
        if (email === 'user@gmail.com' && password === '123456' ){
        res.redirect('/merchant')

        }else{
            res.redirect('/auth');
        }
    }catch(error){
        console.error(error);
        res.redirect('/');
    }
})
    


router.get("/sign-up", (req,res) => {

    res.render("auth/signUp",{
    })

})


module.exports = router;