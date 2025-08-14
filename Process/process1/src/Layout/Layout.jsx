import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {



    return <>
        <Header />
        <NavBar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
}

export default Layout;