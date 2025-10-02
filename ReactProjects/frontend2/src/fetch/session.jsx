import { useEffect } from "react";
import useSessionContext from "../context/use";

const FetchSession = () => {
    const { login } = useSessionContext();

    useEffect(() => {

        const Fetch = async () => {

            try {

                const fetchData = await fetch('http://localhost:9999/api/me', {
                    method: 'GET',
                    credentials: 'include',
                });

                // const fetchData = await fetch('http://localhost:9999/api/anonymous/create', {
                //     method: 'POST',
                //     credentials: 'include',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({
                //         username: "amputer1889"
                //     })
                // });

                if (!fetchData.ok) {
                    throw new Error('Error from the server: ' + fetchData.statusText)
                }

                const data = await fetchData.json();

                // dummyjson returns an object with a `users` array. Pick the first user as an example.
                // const firstUser = Array.isArray(data.users) ? data.users[0] : data;

                await login(data);
                // user won't be updated synchronously here; log the stored value from state in components.
                console.log('stored user after (login called)');

            } catch (error) {

                console.error(error);

            } finally {
                console.log('fetch completed');
            }
        }

        Fetch();
    }, []);

    return null;
}

export default FetchSession;