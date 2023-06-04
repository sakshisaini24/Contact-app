const express = require('express')
const router = express.Router()

const contacts = require('../models/Contact')

router.post("/addcontact",async(req,res)=>{
    // console.log(req.body);
    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(422).json("Please fill the all the fields!");
    }
    try {
        const preuser = await contacts.findOne({email:email});
        console.log(preuser);
        if(preuser){
            res.status(422).json("This user is already present");
        }else{
            const adduser = new contacts({
                name,email,phone
            });
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})

router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await contacts.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})




module.exports = router;