import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopSection from './Components/TopSection'
import BottomSection from './Components/BottomSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
        <TopSection/>
        <div>hhhhh</div>
        <BottomSection/>
        
    </>
  )
}

export default App
