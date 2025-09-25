import { useState, useEffect } from "react";

const UseFetch = ({ url, options = {} }) => { // default options to empty object
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        if (!url) return; // Do nothing if no URL provided

        const controller = new AbortController(); // To cancel fetch if component unmounts
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(null);

            try {
                const response = await fetch(url, { ...options, signal: controller.signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setIsError(err);
                    console.error("Fetch error:", err);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        return () => {
            controller.abort(); // Cleanup on unmount
        };
    }, [url, JSON.stringify(options)]); // Re-fetch if URL or options change

    return { data, isLoading, isError };
};

export default UseFetch;
