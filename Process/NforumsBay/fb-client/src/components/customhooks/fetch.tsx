import { useState, useCallback } from 'react';

const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = useCallback(async (url, options = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result);
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [setLoading, setError, setData]);

    return { fetchData, loading, error, data };
};

export default useFetch;