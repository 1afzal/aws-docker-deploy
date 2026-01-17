import express from "express";
import cors from "cors"
const app = express();
import axios from "axios";
import dotenv from "dotenv";
dotenv.config()
const PORT= process.env.PORT;
app.use(express.json())
app.use(cors());
import todoModel from "./models/todoModel.js";
import todoRoute from "./routes/todoRouter.js";
import mongoose from "mongoose";

function main(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB connected succesfully");
    })
    .catch((err)=>{
        console.log(err.mesaage);
    })
}
main();


app.use('/todos', todoRoute);

app.listen(PORT, ()=>{
    console.log(`Server live at port ${PORT}`)
})