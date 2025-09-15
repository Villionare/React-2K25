import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultValue) {
    // Use a function to get the initial state from local storage.
    // This prevents running localStorage.getItem on every render.
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : defaultValue;
        } catch (error) {
            console.error(error);
            return defaultValue;
        }
    });

    // useEffect to update local storage whenever the state value changes
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;