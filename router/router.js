const express=require('express');
const router=express.Router();
const service=require('../service/service');
module.exports=router;

router.post('/postData',async(req,res)=>{
    try {
        const addData=await service.addData(req.body);
        res.send({
            success:true,
            status:200,
            message:"Data saved succesgully..",
            data:addData
            
        })
    } catch (error) {
        console.log(error);  
    }
})
router.delete('/deleteData/:id',async(req,res)=>{
    try {
        const up=await service.updateData(req.params.id);
        res.send({
            message:"Data deleted",
            up
        })
    } catch (error) {
        console.log(error);
    }
});
router.put('/updateData/:id',async(req,res)=>{
    try {
        const updateData=await  service.updateData(req.params.id,req.body);
        res.send({
            message:"success",
            updateData
        })
    } catch (error) {
        console.log(error);
    }
});
router.get('/getData',async(req,res)=>{
    try {
        const getData=await service.getData(req.body);
        res.send({
            success:true,
            status:200,
            message:"Availabel data are:--",
            data:getData
            
        })
    } catch (error) {
      
        console.log(error);
    }
})