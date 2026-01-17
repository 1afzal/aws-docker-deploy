import { Router } from "express";
const todoRoute = new Router();
import todoModel from "../models/todoModel.js";
 
todoRoute.post('/post/todo', async (req, res) => {
    const { title, description, author } = req.body;

    if (!title || !description || !author) {
        return res.status(400).json({
            error: "All fields required"
        });
    }

    try {
        const todo = await todoModel.create({
            title,
            description,
            author,
            status: false
        });

        res.status(201).json({
            success: true,
            todo
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});


todoRoute.get('/all', async (req, res) => {
    try {
        const todos = await todoModel.find({});
        if (!todos || todos.length === 0) {
            return res.status(404).json({
                error: "No todos to be fetched"
            });
        }
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});
export default todoRoute;