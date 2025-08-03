const mongoose=require("mongoose")

const itemsSchema=new mongoose.Schema({
    id:Number,
    name:String,
    specialization:String,
    profileImage:String,
    availabilityStatus:String,
    details:String,
    availabilitySchedule:Object
})

const itemModel=mongoose.model("Item",itemsSchema)
module.exports=itemModel
