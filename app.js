const express= require ('express') 
const app = express();

const ejs = require ("ejs");
app.set("view engine", "ejs")

const {sequelize, users} = require ('./model')

const bcrypt = require("bcrypt");//day4
const { regLog } = require('./controller/authController');

app.use(express.json())
app.use(express.urlencoded ({extended:true}))

app.get('/title',(req, res) => {
    // res.send("<h1>hello i am about page! </h1>")
    res.render('title.ejs');
 });
 
 app.post('/title', regLog);

 app.listen(4000,()=>{
    console.log("server started at ports 4000")
}); 

