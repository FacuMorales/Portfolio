import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold underline decoration-red-500">Hola, soy Facundo Morales</h1>
        <p className="underline decoration-pink-500">Full Stack Developer</p>
      </div>
    </>
  )
}

export default App
