import Section from './components/Section/Section'
import Accounts from './components/Pages/Account'
import Ranking from './components/Pages/Ranking'
import { Routes, Route } from 'react-router-dom'
import Charts from './components/Pages/Charts'
import { useEffect, useMemo, useState } from 'react'
import Loading from './components/Loading/loading'
import Categories from './components/Pages/Categories'
import Layout from './components/Layout/Layout'
import SearchWindow from './components/SearchWindow/Searchwindow'
import SignUp from './components/Pages/SignUp'
import LogIn from './components/Pages/LogIn'
import { AuthProvider } from './Context/AuthContext'

function App() {

  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const providerValue = useMemo(() => {
    currentUser, setCurrentUser
  }, [currentUser]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) { return <Loading /> } else {
    return (
      <>
        <div className='pt-10 md:pt-15 bg-linear-to-r from-black to-gray-800'>
          <AuthProvider value={providerValue}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Section />} />
                <Route path='accounts' element={<Accounts />} />
                <Route path='categories' element={<Categories />} />
                <Route path='charts' element={<Charts />} />
                <Route path='ranking' element={<Ranking />} />
                <Route path='search' element={<SearchWindow />} />
                <Route path='login' element={<LogIn />} />
                <Route path='signup' element={<SignUp />} />
              </Route>
            </Routes>
          </AuthProvider>
        </div>

      </>
    )
  }
}

export default App
