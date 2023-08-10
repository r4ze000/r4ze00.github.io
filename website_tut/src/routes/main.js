const express = require("express");
const routes = express.Router();
const Detail = require("../models/detail");
const slider = require("../models/slider");
const { default: mongoose } = require("mongoose");
const service = require("../models/service");
const contact = require('../models/contact');
const bodyparser=require('body-parser');
const gallery9=require("../models/gallery");

routes.get('/',async (req,resp)=>{

   const details= await Detail.findOne({"_id":"64d0bb065df96e84e029fe1f"});
   const slides = await slider.find();
   const services = await service.find();

//    console.log(details);
//    console.log(slides);
    
    resp.render("index",{
        details:details,
        slides:slides,
        services:services,
    });

})

routes.get('/gallery',async (req,resp)=>{

    const details= await Detail.findOne({"_id":"64d0bb065df96e84e029fe1f"});
    const gallery = await gallery9.find();

    resp.render("gallery",{
        details:details,
        gallery:gallery
    });  
})


routes.post('/process',(req,resp)=>{
    try {
        
        const data = contact.create(req.body);
        resp.redirect('/ishu');
    } catch (error) {
        console.log(error);

        
    }
});


module.exports=routes;