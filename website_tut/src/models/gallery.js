const mongoose= require('mongoose');


const gallery = mongoose.Schema({
    imageUrl:String
})

module.exports=mongoose.model("Gallery",gallery);
