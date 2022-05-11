import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoMatch from '../components/NoMatch'
import Path1 from '../components/Path1'
import RootPath from '../components/RootPath'
import TodoDetails from '../components/TodoDetails'

function Router() {
  return (
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<RootPath/>} />
          <Route path='/link1' element={<Path1/>} />
          <Route path='*' element={<NoMatch/>}/>
          <Route path='todos/:todoId' element={<TodoDetails/>}/>

      </Routes>
      </BrowserRouter>
    
  )
}

export default Router