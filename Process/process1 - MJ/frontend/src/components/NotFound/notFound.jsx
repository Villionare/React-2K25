import { Link } from "react-router-dom";

const NotFound = () => {

    return <>
        <div className="min-h-screen">
            <div className="flex flex-col gap-10 h-screen justify-center items-center">
                <div>
                    <p className="text-amber-50 text-5xl">
                        Opps..., <br />
                        The page you are trying to access doesn't exits
                    </p>
                </div>
                <div>
                    <p className="text-amber-400">
                        <Link to={'/'}>Go to home</Link>
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default NotFound;