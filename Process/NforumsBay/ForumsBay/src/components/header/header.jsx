import "./style.css";

const Header = () => {

    return <>
        <div className="flex gap-2 h-13 bg-violet-500">

            <div className="flex flex-1 justify-between">

                <div className="border-1 border-red-600">
                    <p className="w-full text-4xl tracking-[]">
                        forumsBay.
                    </p>
                </div>
                <div className="border-1 border-red-600">
                    <p>
                        Active Users
                    </p>
                    <p>
                        Total Users
                    </p>
                </div>
            </div>
            <div className="flex flex-col text-sm border-1 border-red-600">
                <p>
                    Admin login
                </p>
                <p>
                    Anoynomus Mode: Off
                </p>
            </div>
        </div>
    </>
}

export default Header;