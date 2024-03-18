import mongoose from "mongoose";

export const dbconnection= ()=>{
    mongoose.connect(process.env.MONGO_URI,{

        dbName:"RESTO",
    }).then(()=>{
        console.log("Connected to database successfully");
    }).catch((err)=>{
        
        console.log(`Some error occured ${err}`);
    })
}