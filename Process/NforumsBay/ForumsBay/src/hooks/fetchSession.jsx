import { useEffect } from "react";

// Accept the `login` function from the provider so the hook does not call useContext
const useFetchSession = (login) => {
    useEffect(() => {
        if (!login) return; // if login not available yet, skip

        const checkSession = async () => {
            try {
                const resp = await fetch('http://localhost:9999/api/me', {
                    method: 'GET',
                    credentials: 'include',
                });

                if (resp.ok) {
                    const json = await resp.json();
                    login(json);
                } else {
                    login(null);
                }

            } catch (error) {
                console.error('failed to fetch session:', error);
                login(null);
            }
        };

        const int = setInterval(() => {
            checkSession();
        }, 1000);

        // initial check
        checkSession();

        return () => clearInterval(int);
    }, [login]);

    return null;
}

export default useFetchSession;