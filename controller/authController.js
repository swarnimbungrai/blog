const {blogs} = require("../model");
exports.regLog = async (req, res) => {
    
    //const email = req.body.regEmail
    //const password= req.body.regPsw
    const {title,subTitle,desc} = req.body
    console.log(req.body)
    await blogs.create({
      title:title,  
      subTitle: subTitle,
      description: desc,

      //password:bcrypt.hashSync(regPsw,10) //day4 hashing psw

})
 console.log(title,subTitle, desc)
 res.redirect('/title')
}