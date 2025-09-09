import { useCallback, useEffect, useState } from "react";

const useSessionStorage = (key, value = '') => {

    const [valuee, setValue] = useState(null);

    useEffect(() => {
        try {
            if (key && value) {
                sessionStorage.setItem(JSON.stringify(key), JSON.stringify(value))
            } else {
                setValue(sessionStorage.getItem(JSON.stringify(key)));
            }
        } catch (e) {
            console.log(e);
        }
    }, [key, value]);

    return valuee;
}

export default useSessionStorage;