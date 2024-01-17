import { useState } from 'react' 
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css';


function App() { 

  return (
    <>
      <h1 className="text-6xl font-bold text-blue-500">Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
