const express = require("express");
const router = express.Router();


router.get("/", (req,res) => {

    const layout = "layouts/merchant_layout"

    res.render("merchantPages/dashboard",{
      merchant: {
      kyc_status: 2,  
      kyc_reject_reason: 'Incomplete Documents'
    },
    layout
    })
})

router.get("/qr", (req,res) => {

    const layout = "layouts/merchant_layout"

    res.render("merchantPages/qr",{
     
    layout
    })
})

router.get("/api_key_form", (req,res) => {

    const layout = "layouts/merchant_layout"

    res.render("merchantPages/api_key_form",{
     
    layout
    })
})





module.exports = router;