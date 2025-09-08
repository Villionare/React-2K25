import { useLocation, useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import useWindowResize from "../customHooks/useWindowResize";
import Ref from "../hooks/useRef";
import useLocalStorage from "../customHooks/use-Local-storage";
import useSessionStorage from "../customHooks/use-Session-Storage";
import { useId } from "react";
import useUId from "../customHooks/use-Id";

const Dynamo = () => {

    //using usefetch to get comments form random api
    const { loading, data, error } = useFetch({ url: 'https://dummyjson.com/comments', options: { method: 'GET' } });
    console.log('recipes data:', data, 'loading:', loading, 'error:', error);

    const params = useParams();
    const location = useLocation();

    //http://localhost:5173/dynamic/54435435?name=xxx
    console.log(params);
    // id: "54435435"
    console.log(location);
    //this location contains an object of all the realted url things like search/path/key/state

    const { width, height } = useWindowResize();

    // const { count } = useInterval(2000, 3);
    // console.log(count);

    //use-local-storage

    const [value, setValue] = useLocalStorage('aaa', "helper one");
    console.log(value);

    const sess_value = useSessionStorage('name');
    console.log(sess_value);

    //unique id generator
    const first_unique_id = useUId();
    const second_unique_id = useUId();
    console.log(first_unique_id);
    console.log(second_unique_id);

    return <>
        <div>
            <h1>this is all about the dynamic routing</h1>
            <p className="text-amber-600">
                {params.id}
            </p>
            <p className="text-amber-600">
                {/* {location} */}
            </p>
            <p className="text-white">
                width: {width} <br /> height: {height}
            </p>
            <Ref />
        </div>
    </>
}

export default Dynamo;