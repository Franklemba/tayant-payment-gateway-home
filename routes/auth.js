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


router.get("/sign-up", (req,res) => {

    res.render("auth/signUp",{
    })

})

router.get("/profile-setting", (req,res) => {

    const layout = "layouts/merchant_layout"

    res.render("auth/profile_setting",{
     
    layout,
     pageTitle: 'profile-setting'
    })
})

router.get("/change-password", (req,res) => {

    const layout = "layouts/merchant_layout"

    res.render("auth/change_password",{
     
    layout,
     pageTitle: 'change-password'
    })
})

router.get("/two-step", (req,res) => {

    const layout = "layouts/merchant_layout"

    res.render("auth/two_step",{
     
    layout,
     pageTitle: 'two-step'
    })
})

router.get("/logout", (req,res) => {

    res.redirect("/auth/login");
})



module.exports = router;