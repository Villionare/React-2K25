
const MovieDialog = ({ movie, onClose }) => {

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="bg-[#1e1e1e] rounded-2xl shadow-2xl max-w-[80vw] max-h-[70vh] overflow-y-scroll transition-transform duration-300 transform scale-100 animate-fadeIn"

            >
                <div className="relative flex flex-col md:flex-row">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                        aria-label="Close dialog"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    {/* Left Side: Poster Image */}
                    <div className="w-full md:w-1/3 flex-shrink-0 bg-gray-900">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x600/1e1e1e/ffffff?text=Image+Not+Found'; }}
                            alt={`Poster for ${movie.title}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side: Movie Details */}
                    <div className="p-8 md:p-10 flex flex-col space-y-6 text-white">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-1">{movie.title}</h1>
                            <p className="text-sm text-gray-400">Release Date: {movie.release_date}</p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-gray-200 mb-2">Overview</h2>
                            <p className="text-gray-300 leading-relaxed">
                                {movie.overview}
                            </p>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-700">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-400">Rating</span>
                                <span className="text-2xl font-bold text-indigo-400">{movie.vote_average}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-400">Vote Count</span>
                                <span className="text-2xl font-bold text-white">{movie.vote_count}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-400">Popularity</span>
                                <span className="text-2xl font-bold text-white">{movie.popularity}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-400">Genre ID</span>
                                <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium w-min">
                                    {movie?.genre_ids?.[0] ?? 'N/A'}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-400">Language</span>
                                <span className="text-2xl font-bold text-white uppercase">{movie.original_language}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MovieDialog;