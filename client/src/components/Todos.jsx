import React, { useState } from "react";
import axios from "axios";

function Todos() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  async function handleSubmit(e){
    try{
    e.preventDefault();
    await axios.post('http://localhost:6969/todos/post/todo', {title, description, author})
    console.log("submitted")
    setTitle("");
    setDescription("");
    setAuthor("");
    }
    catch(err){
        console.log(err.message)
    }
  }

  return(
     <div>
        <div className="justify-center flex h-screen items-center ">
            <form onSubmit={handleSubmit}  className="flex flex-col gap-10 w-fit border border-2 border-black rounded-md  py-5 px-2">
                
                <div className="flex flex-row gap-5 items-center">
                <label className="font-black">Author: </label>
                <input className="border p-1 border-black rounded-md"  placeholder="John Doe" value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>
                </div>

                <div>
                <label  className="font-black" >Title: </label>
                <input className="border p-1 border-black rounded-md"  placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>

                <div>
                <label  className="font-black" >Description: </label>
                <input className="border p-1 border-black rounded-md"  placeholder="description..." value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                </div>

                <button className="bg-black rounded-md hover:bg-gray-700 text-white" type="submit">create Todo</button>
            </form>
        </div>



     </div>
    )
}

export default Todos;
