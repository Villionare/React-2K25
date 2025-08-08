import { useEffect, useRef, useState } from "react";

const UseRefComp = () => {

    const firstInputref = useRef();


    //this will automatically focus the input tag when loaded.
    useEffect(() => {
        firstInputref.current.focus()
    }, []);

    //timer App using useRef()
    const [count, setCount] = useState(0);

    const $ptag = useRef();

    const start = () => {
        console.log($ptag.current.innerText);
        if (!$ptag.current) { return };

        $ptag.current = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
    }

    const stop = () => {
        clearInterval($ptag.current);
    }

    const reset = () => {
        setCount(0);
    }

    return <>
        <input type="text" ref={firstInputref} className="border-1 rounded-md m-4" placeholder="Enter text..." />
        <h2>Timer App</h2>
        <p id="p" name="para" className="bg-amber-200 border-4 text-amber-700" ref={$ptag}>{count}</p>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Pause</button>
        <button onClick={reset}>Reset</button>
    </>
}

export default UseRefComp;