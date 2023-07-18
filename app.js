const express= require ('express') 
const app = express();

const ejs = require ("ejs");
app.set("view engine", "ejs")

const {sequelize, blogs} = require ('./model')

const bcrypt = require("bcrypt");//day4
const { regLog } = require('./controller/authController');
const { logID } = require('./controller/authController');

app.use(express.json())
app.use(express.urlencoded ({extended:true}))

app.get('/title',(req, res) => {
    // res.send("<h1>hello i am about page! </h1>")
    res.render('title'); //fileName
 });
 
 app.post('/title', regLog); //API

 app.get('/home',async(req, res) => {
    const blogss = await blogs.findAll()
    console.log(blogss)
    res.render('home',{blogss}); //fileName
 });

app.get('/title/:id',async(req,res) => {
   const blogS = await blogs.findAll(
      {where:{
         id: req.params.id}
      }
   ,);
   console.log(blogS)
   res.render('test',{blogS});
   //console.log(req.params.id)

});
//app.post('/title');

 
 app.listen(4000,()=>{
    console.log("server started at ports 4000")
}); 

