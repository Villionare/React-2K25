import { useEffect, useState } from "react";
import Card from "../MovieCard/Cards";
import MovieDialog from "./MovieDialog";

const ShowResult = ({ searchData }) => {
    const [showInfo, setShowInfo] = useState(false);
    const [showMovie, setShowMovie] = useState({});

    const showDetails = (key) => {
        setShowMovie(searchData.results[key]);
        console.log(showMovie);
    }

    useEffect(() => {
        setShowInfo(true);
        console.log('this will be exe');
    }, [showMovie]);

    const Dialog = () => {
        setShowInfo(prev => { !prev });
        console.log(showInfo);
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10">
            {showInfo ? <MovieDialog movie={showMovie} onClose={Dialog} /> : null}

            {searchData.results.map((v, i) => (
                <Card key={i} data={v} index={i} checkDetails={showDetails} />
            ))}
        </div>
    );
};

export default ShowResult;
