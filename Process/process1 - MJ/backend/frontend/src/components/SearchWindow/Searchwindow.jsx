import { Link } from "react-router-dom";
import { useState } from "react";
import FetchQuery from "./FetchQuery";

const SearchWindow = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('');

    const submitQuery = () => {
        setSubmittedQuery(searchQuery); // ✅ this will trigger FetchQuery
        console.log('submitted:', searchQuery);
    };

    return (
        <>
            <div>
                {/* Top Navbar */}
                <div className="flex flex-row items-center p-1 gap-2 fixed top-0 left-0 right-0 pl-2 z-10 h-10 rounded-bl-3xl bg-[#333333] font-[Poppins]">
                    <div className="flex items-center">
                        <img src="/favicon.png" className="w-10 min-w-[50px]" alt="MoviesJournal Logo" />
                        <span className="hidden lg:inline text-xl text-white">
                            <Link to="/">MoviesJournal</Link>
                        </span>
                    </div>

                    <div className="flex-1 flex gap-3 flex-row justify-evenly">
                        {/* Search Bar */}
                        <div className="flex-1 flex items-center bg-[#3d3d3d] rounded-lg px-3 lg:flex-1/4">
                            <input
                                type="text"
                                className="flex-1 rounded-md bg-[#3d3d3d] text-[#c4c4c4] text-xs h-full mr-2 focus:outline-none truncate"
                                placeholder="Search"
                                aria-label="Search movies"
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && submitQuery()}
                            />
                            <i className="fa-solid fa-magnifying-glass text-white"></i>
                        </div>

                        <div className="text-white flex justify-center items-center">
                            <Link to="/accounts"><span className="text-sm">Login</span></Link>
                        </div>

                        <button className="flex text-white bg-[#3d3d3d] text-sm p-2 rounded-md">
                            <i className="fa-solid fa-sun text-white"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="min-h-screen">
                {submittedQuery && <FetchQuery searchString={submittedQuery} />}
            </div>
        </>
    );
};

export default SearchWindow;
