import { Link } from "react-router-dom";

const Header = () => {

    return <>
        <div className="flex flex-row h-15 items-center fixed top-0 right-0 left-0 bg-gray-300">
            <div className="flex justify-center flex-1/4">
                <h2 className="text-4xl"><b>ConG.</b></h2>
            </div>
            <div className="flex flex-row gap-4 flex-2/4 bg-gray-400 p-2 rounded-sm">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/account'}>Account</Link>
            </div>
            <div className="flex justify-center flex-1/4 bg-gray-400 p-2 rounded-sm mx-2">
                <span>Night/</span>
                <span>Day</span>
            </div>
        </div>
    </>
}

export default Header;