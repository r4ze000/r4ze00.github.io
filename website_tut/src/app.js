const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose= require("mongoose");
const routes=require("../src/routes/main");
const detail = require("./models/detail");
const slider = require("./models/slider");
const service = require("./models/service");
const bodyparser=require("body-parser");
const gallery = require("./models/gallery");

//serving static files
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use('/static',express.static("public"));
//routing
app.use("/ishu",routes);

//hbs

app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials");
//connecting database

mongoose.connect("mongodb://localhost/website_tut");
    
    
// gallery.create([{
//     imageUrl:"https://steamuserimages-a.akamaihd.net/ugc/1191712943203065116/0601722F9987C129E3DCE91B88F288F8F1D408F6/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
// }
// ])
// slider.create([{
//     title:"Raze",
//     subtitle:"Here comes the party.",
//     imageUrl:"/static/images/s1.jpg",
//     class:"active"
// },
// {
//     title:"Jett",
//     subtitle:"Get out of my way.",
//     imageUrl:"/static/images/s2.jpg",
//     class:""
// },
// {
//     title:"Sage",
//     subtitle:"I am not just a healer..",
//     imageUrl:"/static/images/sage.jpg",
//     class:""
// },
// ])
// detail.create({
//     brandName:"Instalocker Valorant",
//     brandIconUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fseeklogo.com%2Fvector-logo%2F379976%2Fvalorant&psig=AOvVaw0cCKWOR7Uh1I_FhKKmlkKL&ust=1691482001180000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPivntCLyoADFQAAAAAdAAAAABAE",
//     links:[{
//         label:"Home",
//         url:"/"
//     },
//     {
//         label:"Services",
//         url:"/services"

//     },
//     {
//         label:"Gallery",
//         url:"/gallery" 
//     },
//     {
//         label:"About-us",
//         url:"/about" 
//     },
//     {
//         label:"Contact-us",
//         url:"/contact" 
//     },
// ]
// })

//creating server
app.listen(process.env.PORT | 5556,()=>{
    console.log("port started");
})