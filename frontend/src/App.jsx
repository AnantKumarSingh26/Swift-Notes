import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <Card/>
    </div>
  )
}

export default App
