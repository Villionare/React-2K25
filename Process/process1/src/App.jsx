import Section from './components/Section/Section'
import Layout from './Layout/Layout'
import Accounts from './components/Pages/Account'
import Ranking from './components/Pages/Ranking'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Charts from './components/Pages/Charts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Section />} />
          <Route path='accounts' element={<Accounts />} />
          <Route path='charts' element={<Charts />} />
          <Route path='ranking' element={<Ranking />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
