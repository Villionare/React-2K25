import { useState } from "react";

const Home = () => {

    const [isAdmin, setIsAdmin] = useState(false);

    return <>
        <div className="text-white min-h-screen bg-amber-700">
            <p className="text-5xl text-amber-950">
                this is the start page
                <br />
                threads
                <br />
                boards
                <br />
                posts
            </p>

            <p>
                {isAdmin ? <p>Admin</p> : <p>Anonymous</p>}
            </p>
        </div>
    </>
}

export default Home;