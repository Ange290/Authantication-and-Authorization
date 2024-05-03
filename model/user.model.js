import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:String,
    email:{type:"string", unique:true},
    password:String,
    token:String
});

const user = mongoose.model("User",userSchema);
export default user;