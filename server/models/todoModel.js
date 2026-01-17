import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: {type:String, required: true},
    status: { type: Boolean, required: true }
}, { timestamps: true });

const todoModel = mongoose.model("Todo", todoSchema, "todos");

export default todoModel;