const mongoose=require("mongoose");

const link=process.env.mongo_link;

mongoose.connect(link);

const conn=mongoose.connection

conn.on("open",()=>{
  console.log("db running");
})