import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function TodoDetails() {
 const {todoId}=useParams();
 const [todoObject, setTodoObject]=useState(null)

 useEffect(()=> {
   fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
   .then(res=>res.json())
   .then(data=>setTodoObject(data))
 },[])
 

  return (
    <div>
    
      <p>title: {todoObject?.title} </p>
      <p>isComplete: {todoObject?.completed} </p>
      <p>userID:  {todoObject?.userId}</p>

      <Link to='/'> go to home</Link>
    </div>
  )
}

export default TodoDetails