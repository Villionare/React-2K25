import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserTypeContext = ({ childern }) => {

    //this is the root where the user is store for the whole fontend
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const Login = (user) => {
        setUser(user)
    }

    const Logout = () => {
        setUser(null);
    }

    useEffect(() => {
        const checkSession = () => {
            try {
                const fetchUser = fetch('http://localhost:9999/api/me', {
                    method: 'GET',
                    credentials: 'include',
                });

                const responce = fetchUser.json();
                setUser(responce);
                console.log(user);

            } catch (e) {
                setUser(null);
                console.log(e);
            } finally {
                setLoading(false);
            }
        }

        checkSession();
    },
        []);

    //from wherever the login is occuring from there seruser(user);

    //logout will basically serUser(null)

    return <>
        <UserContext value={{ user, loading, Login, Logout }}>
            {childern}
        </UserContext>
    </>
}