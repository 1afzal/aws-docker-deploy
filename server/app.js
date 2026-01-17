import express from "express";
const app = express();
import axios from axios;
app.use(express.json())
app.use(cors());


app.get('/todos', async(req,res)=>{
    const response = await axios.get("");
    const data = response.data;
    console.log(data);
})

app.listen(PORT, ()=>{
    console.log(`Server live at port ${PORT}`)
})