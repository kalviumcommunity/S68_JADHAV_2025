const express=require('express')
const router=express.Router();

router.post('/create',(req,res)=>{
    res.send("I am created");
})

router.get('/Read',(req,res)=>{
    res.send("I am Read");
})

router.put('/updated',(req,res)=>{
    res.send("I am ");
})

router.delete('/deleted',(req,res)=>{
    res.send("I am created");
})

module.exports=router;
