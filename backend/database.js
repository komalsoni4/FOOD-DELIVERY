const mongoose=require("mongoose");


//const DB='mongodb+srv://komal:Soni%401242@cluster0.dwedhwk.mongodb.net/deliverydata?retryWrites=true&w=majority';
const DB="mongodb://localhost:27017/DilFoods"
const connectDatabase =()=>{

    // mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((data)=>{
    //     console.log(`Mongodb Connected${data.connection.host}`);
    // }).catch((err)=>{
    //     console.log(err)
    // })
      
    mongoose.connect(DB,).then(()=>{
        console.log(`connection Succesfull`);
    }).catch((err)=> console.log('no connection'));
    
      
}
module.exports = connectDatabase
