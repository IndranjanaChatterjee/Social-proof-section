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
     <div className='w-screen h-full flex flex-col justify-center items-center bg-amber-400'>
      <div className='w-[85%] h-full flex flex-col flex-wrap justify-center items-center bg-amber-900 py-10 gap-6'>
        <TopSection/>
       
        <BottomSection/>
        </div>
        
      </div>
    </>
  )
}

export default App
