import { useEffect, useState } from "react";

const SearchResults = ({ searchQuery }) => {

    const [result, setResult] = useState(false);

    useEffect(() => {
        console.log(searchQuery);

        //fetchlogic
    }, []);

    return <>
        <div>
            {result ? <ShowResult /> : <p>no search results found</p>}
        </div>
    </>
}

export default SearchResults;