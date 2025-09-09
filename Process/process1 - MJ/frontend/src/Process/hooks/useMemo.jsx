import { useMemo } from 'react';
import useFetch from '../customHooks/useFetch';

const MemoDoing = () => {
    const options = { method: 'GET' };

    // useFetch expects an object: { url, options }
    const { loading, data, error } = useFetch({ url: 'https://dummyjson.com/products', options });

    // derive the part of data we care about (dummyjson returns { products, total, skip, limit })
    const memodata = useMemo(() => {
        if (!data) return null;
        // prefer products array if present
        return data.products ?? data;
    }, [data]);

    console.log('fetched', memodata);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message ?? String(error)}</div>;

    // render a safe representation of the data
    return (
        <div>
            {Array.isArray(memodata) ? (
                <ul>
                    {memodata.map((p) => (
                        <li key={p.id ?? p.productId ?? JSON.stringify(p)}>
                            {p.title ?? p.name ?? JSON.stringify(p)}
                        </li>
                    ))}
                </ul>
            ) : (
                <pre style={{ whiteSpace: 'pre-wrap', maxHeight: 300, overflow: 'auto' }}>{JSON.stringify(memodata, null, 2)}</pre>
            )}
        </div>
    );
};

export default MemoDoing;