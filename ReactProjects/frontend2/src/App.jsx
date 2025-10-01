import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const a = setInterval(() => {
      setCount(prev => prev + 1)
    }, 2000);

    return () => {
      clearInterval(a);
    }

  }, []);

  return (
    <>
      {count}
      <button onClick={() => setCount(prev => prev + 1)}>
        update
      </button>
    </>
  )
}

export default App;