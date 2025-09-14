import { useRef, useState } from "react";
import UseCallbackEG from "../hooks/useCallback";
import MemoDoing from "../hooks/useMemo";
import Count from "../customHooks/useCount";
import { useQuery } from "@tanstack/react-query";

const Testing = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://dummyjson.com/products')
                .then((res) =>
                    res.json(),
                ),
    })

    if (isPending) { return <h1>Loading...</h1> }
    if (error) { return <h1>Opps... {error.message}</h1> }


    return <div className="min-h-screen text-white">
        {/* <MemoDoing /> */}
        {/* <UseCallbackEG /> */}

        {/* <Count value={count1} updater={setCount1} /> */}
        {/* <Count value={count2} updater={setCount2} /> */}
        <div>
            <ul>
                {(() => {
                    // handle different shapes: data could be an array or an object with `products`
                    const list = Array.isArray(data) ? data : (data && data.products) ? data.products : [];

                    if (!list.length) return <li>No items found</li>;

                    return list.map((v, i) => (
                        <li key={v.id ?? i}>
                            {typeof v === 'object' ? (v.title ?? v.name ?? JSON.stringify(v)) : String(v)}
                        </li>
                    ));
                })()}
            </ul>
        </div>

    </div>
}

export default Testing;