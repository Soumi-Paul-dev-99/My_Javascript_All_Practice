const express=require("express");
const router=express.Router()

router.get("/register",(req,res)=>{
    res.send(" I AM A register page")
})
router.get("/login",(req,res)=>{
    res.send("I am a login")
})

module.exports = router