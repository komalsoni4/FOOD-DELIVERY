const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./database")

//Handling uncaugh errror
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to uncaught Exception`);
});
//config
 dotenv.config({path:"backend/config/config.env"});
// app.listen(process.env.PORT,()=>{
//     console.log(`Server is working on http://localhost:${process.env.PORT}`)
// })
connectDatabase();
const PORT=4000;
const server=app.listen(PORT,()=>{
    console.log(`Server is working on http://localhost:${PORT}`)
})

//handling Promise Rejection

process.on("unhandledRejection",err=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to uncaught Exception`);
    server.close(()=>{
        process.exit(1)
    });
});