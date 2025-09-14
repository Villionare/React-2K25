import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Route path="/dynamic/:id" element={<Dynamo />} />
      <Route path="/test" element={<Testing />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
}

export default App
