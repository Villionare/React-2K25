import { useEffect, useState } from "react";
import useSessionContext from "../context/use";

const useFetchSession = () => {
    const { login } = useSessionContext();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const Fetch = async () => {
            try {
                const fetchData = await fetch('http://localhost:9999/api/me', {
                    method: 'GET',
                    credentials: 'include',
                });

                if (!fetchData.ok) {
                    throw new Error('Error from the server: ' + fetchData.statusText)
                }
                const data = await fetchData.json();
                await login(data);

            } catch (error) {
                console.error(error);
            } finally {
                console.log('fetch completed');
            }
        }

        setTimeout(() => {
            Fetch();
            setCount(prev => prev + 1);
            console.log('Auto Fetch: ', count);
        }, 2000);

    }, []);

    return null;
}

export default useFetchSession;