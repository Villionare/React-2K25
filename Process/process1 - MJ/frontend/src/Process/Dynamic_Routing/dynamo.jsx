import { useLocation, useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const Dynamo = () => {
    const { loading, data, error } = useFetch({ url: 'https://dummyjson.com/recipes', options: { method: 'GET' } });
    console.log('recipes data:', data, 'loading:', loading, 'error:', error);

    const params = useParams();
    const location = useLocation();

    const options = {
        method: 'GET'
    }

    //http://localhost:5173/dynamic/54435435?name=xxx

    console.log(params);
    // id: "54435435"
    console.log(location);
    //this location contains an object of all the realted url things like search/path/key/state
    return <>
        <div>
            <h1>this is all about the dynamic routing</h1>
            <p className="text-amber-600">
                {params.id}
            </p>
            <p className="text-amber-600">
                {/* {location} */}
            </p>

        </div>
    </>
}

export default Dynamo;