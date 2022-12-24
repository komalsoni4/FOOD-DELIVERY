const express=require("express");
const path=require("path");
const app=express();
const errorMiddleware=require("./middleware/error");
const cookiePrarser=require("cookie-parser");
const hbs=require("hbs");
// const {registerPartials}=require("hbs");
const ContactUser=require("./models/contactModel");
const Register=require("./models/userModel")
// const staticpath=path.join(__dirname,"../Food-Project-master")
const staticpath=path.join(__dirname,"../assets")
const templatepath=path.join(__dirname,"../templates/views")
const partialspath=path.join(__dirname,"../templates/partials")


app.use(express.json())
app.use(cookiePrarser());
app.use(express.urlencoded({extended:false}));

app.use(express.static(staticpath));
app.set("view engine" ,"hbs");
app.set("views",templatepath);
hbs.registerPartials(partialspath);


//Route imports
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.get("/login",(req,res)=>{
  res.render("login");
})

app.get("/register",(req,res)=>{
  res.render("register");
})
app.post("/contact",async(req,res)=>{
      try {
        res.send(req.body);
        const contactUser=new ContactUser(req.body);
        await contactUser.save();
        res.status(201).render("index");
      } catch (error) {
        res.status(500).send(error);
      }
})

app.post("/register",async (req,res)=>{
  try {
    console.log(req.body.Username);
       res.send(req.body.Username);
       const password=req.body.password;
       const cpassword=req.body.confirmpassword;
       if(password==cpassword)
       {
        const registeredUser=new Register({
          name:req.body.name,
          email:req.body.email,
          phoneno:req.body.phoneno,
          address:req.body.address,
          password:password,
          confirmpassword:cpassword
        })
       const registered=await registeredUser.save();
       res.status(201).render("index");
       }else{
        res.send("password are not matching")
       }
  } catch (error) {
    res.status(400).send(error);
  }
})
const product=require("./routes/productRoute");
const user=require("./routes/userRoute");
const order=require("./routes/orderRoute");
// const message=require("./routes/contactRoute");
app.use("/dilfoods",product);
app.use("/dilfoods",user);
app.use("/dilfoods",order);
// app.use("/dilfoods",message);
//Middleware for errrror
app.use(errorMiddleware);

module.exports = app;