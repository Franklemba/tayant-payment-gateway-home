const express = require("express");
const router = express.Router();

const sections = [
  { slug: 'banner', status: 1 },
  { slug: 'about', status: 1 },
  { slug: 'services', status: 1 },
  { slug: 'how', status: 1 } ,
  { slug: 'counter', status: 1 },
  { slug: 'feature', status: 1 },
  { slug: 'faqs', status: 1 },
  { slug: 'testimonials', status: 1 },
  { slug: 'blogs', status: 1 },
  { slug: 'sponsors', status: 1 },

];


router.get("/", (req,res) => {

    res.render("homePages/home",{
      sections
    })
})

router.get("/about", (req,res) => {
    res.render("homePages/about",{
        sections
      })
})


router.get("/apiDocumentation", (req,res) => {
  res.render("homePages/apiDocumentation",{
      // sections
    })
})



router.get("/blog", (req,res) => {
  res.render("homePages/blog",{
      sections
    })
})


router.get("/contact", (req,res) => {
  res.render("homePages/contact",{
      sections
    })
})

router.get("/faq", (req,res) => {
  res.render("homePages/faq",{
      sections
    })
})


module.exports = router;
  