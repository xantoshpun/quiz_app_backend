import mongoose from "mongoose";

export default async function connect(){
     mongoose.connect("mongodb+srv://admin:admin123@cluster0.unuish8.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected")
}