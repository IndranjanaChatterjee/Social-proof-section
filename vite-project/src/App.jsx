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
     <div className='w-screen h-full flex flex-col justify-center items-center'>
      <div className='w-[86%] h-full flex flex-col flex-wrap justify-center items-center  py-10 gap-6'>
        <TopSection/>
       
        <BottomSection/>
        </div>
        <div class="w-full text-center ">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" className='mx-1' target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="https://www.frontendmentor.io/profile/IndranjanaChatterjee" className='mx-1'>Indranjana Chatterjee</a>.
    </div>
        
      </div>
    </>
  )
}

export default App
