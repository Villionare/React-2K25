import { useCallback } from "react";
import useFetch from "../customHooks/useFetch";

const UseCallbackEG = () => {
    const url = {
        url: 'https://dummyjson.com/posts'
    }

    const options = {
        method: 'GET'
    }

    const { data, loading, error } = useFetch({ url, options });



    const callbackFunc = useCallback((val) => {

    }, []);

    return <></>
}

export default UseCallbackEG;