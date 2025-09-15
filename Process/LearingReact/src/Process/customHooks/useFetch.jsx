import { useEffect, useState } from 'react';

/**
 * useFetch hook
 * Accepts a single parameter object: { url, options }
 */


function useFetch({ url, options } = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!url) return;

        const controller = new AbortController();
        const signal = controller.signal;

        let mounted = true;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(url, { ...(options || {}), signal });

                if (!res.ok) {
                    throw new Error('HTTP error: ' + res.status + ' ' + res.statusText);
                }

                const json = await res.json();
                if (!mounted) return;

                setData(json);
            } catch (e) {
                if (e.name === 'AbortError') return; // request was cancelled
                if (!mounted) return;
                console.error('useFetch error', e);
                setError(e);
            } finally {
                if (mounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            mounted = false;
            controller.abort();
        };
        // stringify options to compare in deps
    }, [url, options ? JSON.stringify(options) : undefined]);

    return { loading, data, error };
}

export default useFetch;