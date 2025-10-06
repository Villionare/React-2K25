import './App.css'
import Header from './assets/components/header'
import Hero from './assets/components/hero'
import MovieList from './assets/components/movies'

function App() {

  return (
    <div className='bg-[url(public/images/background.jpg)] border-1 border-amber-950 h-auto py-2 px-2 md:px-30'>
      <div className=''>
        <Header />
        <Hero />

      </div>
      <MovieList />
    </div>
  )
}

export default App
