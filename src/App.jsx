import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Ragister from './pages/Ragister'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Ragister/>
    </>
  )
}

export default App
