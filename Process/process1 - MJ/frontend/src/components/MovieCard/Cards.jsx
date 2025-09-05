import { Star } from "lucide-react";

export default function Card({ data, index, checkDetails }) {

    return (
        <div className="flex flex-col bg-[#1e1e1e] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer w-auto">
            {/* Poster */}

            <div className="aspect-[2/3] w-full overflow-hidden rounded-xl">

                <img
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    onError={(e) => { e.currentTarget.src = "/img_not_Found.svg" }}
                    alt={data.title || "Movie Poster"}
                    className=" object-cover object-center"
                />

            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-4 flex-1">
                {/* Title + Year */}
                <div>
                    <h3 className="text-white font-bold text-sm leading-tight truncate">
                        {data.title || data.name}
                    </h3>
                    <p className="text-gray-400 text-xs">
                        {data.release_date || "Unknown"} • Sci-Fi / Thriller
                    </p>
                </div>

                {/* Rating + CTA */}
                <div className="flex items-center justify-between mt-2">
                    {/* Rating */}
                    <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">
                            {data.vote_average ? data.vote_average.toFixed(1) : "N/A"}
                        </span>
                    </div>

                    {/* Watch Button */}
                    <button className="px-3 py-1 bg-sky-600 hover:bg-sky-700 rounded-lg text-white text-sm font-semibold transition-colors" onClick={() => { checkDetails(index) }}>
                        Info
                    </button>
                </div>
            </div>
        </div>
    );
}
