import Section from './components/Section/Section'
import Layout from './Layout/Layout'
import Accounts from './components/Pages/Account'
import Ranking from './components/Pages/Ranking'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Charts from './components/Pages/Charts'
import { useEffect, useState } from 'react'
import Loading from './components/Loading/loading'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) { return <Loading /> } else {
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
}

export default App
