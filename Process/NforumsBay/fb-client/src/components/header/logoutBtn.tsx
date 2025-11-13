import { useEffect, useState } from "react";
import useSessionContext from "../../context/useContext";
import Timer from "./Timer";

interface Timer {
    hours: number,
    minutes: number,
    seconds: number
}

const Username = () => {

    const { user, logout } = useSessionContext();
    const [time, setTime] = useState<Timer>();

    //this is to set the timers remaining time.
    useEffect(() => {
        if (user?.session_expiry) {

            const givenTime = new Date(user.session_expiry);

            //this is the current time
            const now = new Date();


            //.getTime() will convert both of them in milliseconds
            const diffMs = givenTime.getTime() - now.getTime();

            // If the time already passed:
            if (diffMs <= 0) {
                setTime({ hours: 0, minutes: 0, seconds: 0 });
            } else {
                const hours = Math.floor(diffMs / (1000 * 60 * 60));
                const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
                setTime({ hours, minutes, seconds });
            }
        }
    }, [user])

    if (user?.session_data) {

        const userType = user.session_data?.type;
        const username = user.session_data?.username;

        return (
            <div className="flex gap-7">
                <p className="flex gap-2 text-red-600">
                    {userType === 'admin' && <span role="img" aria-label="shield"> 🛡️ </span>}
                    {userType === 'anonymous' && <span role="img" aria-label="wave"> 🥸 </span>}
                    {username || 'user'}
                    <Timer hours={time?.hours} minutes={time?.minutes} seconds={time?.seconds} />
                </p>
                <button onClick={logout} className="border-1 border-gray-400 px-2 cursor-pointer">
                    Logout
                </button>
            </div>
        );
    }
}

export default Username;
