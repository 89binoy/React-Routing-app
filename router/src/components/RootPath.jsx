import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function RootPath() {

    const[todos,SetTodos]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res=>res.json())
        .then(data=>SetTodos(data))
    },[])
  return (
    <div>
        
        <h2>I am from Root Page.</h2>

        <ul>
            {todos.map(todo=>(
                <li>
                    <Link to={`todos/${todo.id}`}>
                    {todo.title}
                    </Link>
                    
                </li>
            ))}
        </ul>
        
        <Link to= '/link1'>
             go to path1
        </Link>
    </div>
  )
}

export default RootPath