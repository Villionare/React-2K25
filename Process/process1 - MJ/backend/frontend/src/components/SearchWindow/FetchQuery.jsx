import { useEffect, useState } from "react";
import ShowResult from "./ShowResult";

const FetchQuery = ({ searchString }) => {
    const [response, setResponse] = useState(null);

    const apiFetch = async () => {
        try {
            const urlQuery = encodeURIComponent(searchString); // ✅ fixed
            const url = `https://api.themoviedb.org/3/search/movie?query=${urlQuery}&include_adult=true&language=en-US&page=1`;

            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzcwMGJmYjI3NDU2ZDFlYjYwMTU2YTA2ZTlkMmZiZiIsIm5iZiI6MTcyNDUxNTYwOS41NDMsInN1YiI6IjY2Y2EwNTE5ODM0NjIwMjBiOWRlMDcyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Bo7UwP7K0K_ptsujChQONCt_UWEhPJy94X6HEGgSfo'

                }
            };

            const res = await fetch(url, options);
            const data = await res.json();
            setResponse(data);
            console.log("Fetched data:", response);

        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (searchString) apiFetch();
    }, [searchString]); // ✅ runs whenever searchString changes

    return (
        <div>
            {response ? <ShowResult searchData={response} /> : <p>Loading...</p>}
        </div>
    );
};

export default FetchQuery;
