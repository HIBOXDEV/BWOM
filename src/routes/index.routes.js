const {Router} = require("express");

 const router = Router()



router.get("/" ,  (req , res) =>{
    res.render("home")
 });

 router.get("/games" ,  (req , res) =>{
    res.render("games")
 });

 router.get("/blog" ,  (req , res) =>{
   res.render("blog")
});
 
 module.exports = router;