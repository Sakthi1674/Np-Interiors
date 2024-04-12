const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://NPinteriors:NPinteriors@npinteriors.moj3lbo.mongodb.net/")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log('failed');
})
const newSchema = new mongoose.Schema({
    _id: {
        type: Number,
        default: () => ++counter, // Increment the counter and use it as the default value for _id
      },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}) 
const collection = mongoose.model("collections",newSchema)

module.exports=collection