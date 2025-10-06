import { useState } from "react";
import { useUserContext } from "../../context/useUserContext";
import type React from "react";

const AnonLogin = () => {
    const [nameValue, setNameValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean | undefined>(undefined);
    const { user, login, logout } = useUserContext();

    const submitAnon = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //fetch login

        try {
            setLoading(true);
            const responce = await fetch('http://localhost:9999/api/anonymous/create', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'username': nameValue }),
            });

            if (!responce.ok) {
                throw new Error('server didnt responded with ok: ' + responce.statusText)
            }

            const data = await responce.json();
            login(data);

            console.log('so now the data in the context is: ', user);

        } catch (error) {
            console.error(error);
            setLoading(false)
        } finally {
            setLoading(false)
            console.log('fetch compleated');
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNameValue(e.target.value);
        console.log(nameValue);
    }

    return <>
        <form onSubmit={(e) => submitAnon(e)}>
            <input type="text" placeholder="enter name" name="username" value={nameValue} onChange={(e) => handleChange(e)} />
            <input type="submit" value={'submit form'} />
            {(loading) ? null : <button onClick={logout}>Logout</button>}
        </form>

        {(loading) ?
            <p>loading</p>
            :
            <p>here is the responce: {user?.message}</p>}
    </>
}

export default AnonLogin;