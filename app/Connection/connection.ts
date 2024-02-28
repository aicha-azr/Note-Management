import mongoose from "mongoose";
 export default function Connect(){ 
mongoose.connect('mongodb+srv://aichaazeroual03:NnweUCLisjodRfX2@cluster0.jyonyz5.mongodb.net/')
.then(()=>console.log('you are connected'))
.catch((e)=>console.log(e.message))
}