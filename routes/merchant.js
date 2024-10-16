const express = require("express");
const router = express.Router();




router.get("/dashboard", (req,res) => {
    const layout = "layouts/merchant_layout"

    res.render("merchantPages/dashboard",{
      merchant: {
      kyc_status: 2,  
      kyc_reject_reason: 'Incomplete Documents'
    },
    layout,
    pageTitle: 'Dashboard'
    })
})

router.get("/", (req,res) => {

    res.redirect("/merchant/dashboard")
})

router.get("/qr", (req,res) => {

    const layout = "layouts/merchant_layout"

    res.render("merchantPages/qr",{
     
    layout,
     pageTitle: 'QR'
    })
})

router.get("/api_key_form", (req,res) => {

    const layout = "layouts/merchant_layout"

    res.render("merchantPages/api_key_form",{
     
    layout,
    pageTitle: 'api_key_form'
    })
})

router.get("/transactions", (req,res) => {

    const layout = "layouts/merchant_layout"

    res.render("merchantPages/transactions",{
     
    layout,
    pageTitle: 'transactions'
    })
})

router.get("/withdraw-money", (req,res) => {

    const layout = "layouts/merchant_layout"

    res.render("merchantPages/withdraw_form",{
     
    layout,
    pageTitle: 'withdraw_form'
    })
})


router.get("/withdraw-history", (req,res) => {

    const layout = "layouts/merchant_layout"

    res.render("merchantPages/withdraw_history",{
     
    layout,
    pageTitle: 'withdraw_history'
    })
})





module.exports = router;