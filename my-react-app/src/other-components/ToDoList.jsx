
import React, { useState } from "react";
function ToDoList(){
    const [tasks,setTasks]=useState(["play game","watch movie"]);
    const[newTasks,setNewTasks]=useState("");

    function handleNewTasks(event){
        setNewTasks(event.target.value);
    }
    function deleteTasks(index){
        const t=tasks.filter((_,i)=> i!==index);
        setTasks(t)
    }
    function toMoveUp(index){
        if(index>0){
            const newtasks=[...tasks];
            [newtasks[index],newtasks[index-1]]=[newtasks[index-1],newtasks[index]];
            setTasks([...newtasks]);

        }
    }
    function toMoveDown(index){
        if(index<tasks.length-1){
            const newtasks=[...tasks];
            [newtasks[index],newtasks[index+1]]=[newtasks[index+1],newtasks[index]];
            setTasks([...newtasks]);

        }
    }
    function add(){
         const txt=document.getElementById("adds").value;
        document.getElementById("adds").value="";
        if(txt!=""){
            setTasks(t=>[...t,newTasks]);
        setNewTasks("");
        }

    }
    return(<div className="list-container">
        <h1>To-Do-List</h1>
        <input type="text" placeholder="add a new task" onChange={handleNewTasks} id="adds"></input>
        <button className="add-task" onClick={add} >add</button>
        <div className="main">
            <ol>
                {tasks.map((task,index)=><li key={index}>
                    <span>{task}</span>
                    <button className="delete" onClick={()=>deleteTasks(index)}>Delete</button>
                    <button className="move-up" onClick={()=>toMoveUp(index)}>⬆️</button>
                    <button className="move-down" onClick={()=>toMoveDown(index)}>⬇️</button>
                    </li>)}
            </ol>
        </div>
    </div>);
}
export default ToDoList