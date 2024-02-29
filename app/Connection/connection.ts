import mongoose from "mongoose";
import dotenv from'dotenv';
dotenv.config();


export default function Connect(){ 
mongoose.connect(process.env.URL!)
.then(()=>console.log('you are connected'))
.catch((e)=>console.log(e.message))
}