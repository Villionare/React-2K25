import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Persons = () => {
    const location = useLocation();
    console.log(location);
    const { id } = useParams();
    // console.log(parameters);
    return <>
        <p>this is the persons list <br /> {id ? `you are in the user ${id}` : null}</p>
    </>
}

export default Persons;