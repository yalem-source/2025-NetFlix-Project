import { useState } from 'react'
import Home from './Pages/Home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className='App'>
      <Home/>
      </div>
      
  
  )
}

export default App
