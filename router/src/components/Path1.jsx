import React from 'react'
import { Link } from 'react-router-dom'
function Path1() {
  return (
    <div>
        
        <h2> I am from link 1</h2>

        <Link to={'/'} >
            go to home
        </Link>
        
    </div>
  )
}

export default Path1