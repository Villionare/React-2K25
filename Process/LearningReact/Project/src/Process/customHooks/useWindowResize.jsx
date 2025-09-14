import { useLayoutEffect, useState } from "react";

const useWindowResize = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useLayoutEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)

        return () => { window.removeEventListener('resize') }
    }, []);

    return {
        width,
        height
    }

}

export default useWindowResize;