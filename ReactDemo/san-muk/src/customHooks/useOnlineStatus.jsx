import { useEffect, useState } from "react";

const UseOnlineStatus = () => {

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {

        const handleOnline = () => {
            setIsOnline(true);
        }

        const handleOffline = () => {
            setIsOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

    }, []);

    return <p>{isOnline ? "online" : "offline"}</p>;
}

export default UseOnlineStatus;