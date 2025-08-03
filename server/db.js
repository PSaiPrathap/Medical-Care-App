const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://psaiprathap:Prathap12@cluster0.fgdfp.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0");
        console.log("mongodb is connected")
    }
    catch(error){
        console.error(error);
        process.exit(1)
    }
}

module.exports=connectDB