import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [gym, setGym] = useState([]);
  useEffect(()=>{
    fetch('/gym.json')
    .then(res=>res.json())
    .then(data=>setGym(data))
  },[])

  return (
    <>
      <div className='text-6xl'>
        {gym.map(element=><img src={element.image} className='h-[350px] w-[500px]'></img>)}
      </div>
    </>
  )
}

export default App
