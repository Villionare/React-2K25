import { useState } from 'react'
import Header from './components/Header.jsx/Header'
import NavBar from './components/NavBar/NavBar'
import Section from './components/Section/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <NavBar />
      <Section />
    </>
  )
}

export default App
