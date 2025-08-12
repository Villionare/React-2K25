import { Link } from "react-router-dom";

const Navbar = () => {

    return <>
        <div className="flex flex-col fixed top-15 left-0 bottom-0 bg-amber-400 w-50 p-15">
            <ul className="list-none">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/account'}>Account</Link></li>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/account'}>Account</Link></li>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/account'}>Account</Link></li>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/account'}>Account</Link></li>
            </ul>
        </div>
    </>
}

export default Navbar;