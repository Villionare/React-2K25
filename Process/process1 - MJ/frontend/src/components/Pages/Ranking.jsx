import React, { useState } from "react";

const Ranking = () => {
    // 🎬 Dummy Movies Data
    const [movies] = useState([
        {
            rank: 1,
            title: "The Shawshank Redemption",
            year: 1994,
            poster: "/shawshank.jpg",
            rating: 9.3,
            genres: ["Drama"],
            runtime: "2h 22m",
            description: "Two imprisoned men bond over a number of years and find solace and eventual redemption."
        },
        {
            rank: 2,
            title: "The Godfather",
            year: 1972,
            poster: "/godfather.jpg",
            rating: 9.2,
            genres: ["Crime", "Drama"],
            runtime: "2h 55m",
            description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son."
        },
        {
            rank: 3,
            title: "The Dark Knight",
            year: 2008,
            poster: "/darkknight.jpg",
            rating: 9.0,
            genres: ["Action", "Crime", "Drama"],
            runtime: "2h 32m",
            description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into anarchy."
        },
        {
            rank: 4,
            title: "12 Angry Men",
            year: 1957,
            poster: "/12angry.jpg",
            rating: 9.0,
            genres: ["Drama"],
            runtime: "1h 36m",
            description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider."
        },
        {
            rank: 5,
            title: "Schindler's List",
            year: 1993,
            poster: "/schindler.jpg",
            rating: 9.0,
            genres: ["Biography", "Drama", "History"],
            runtime: "3h 15m",
            description: "In German-occupied Poland, Oskar Schindler becomes an unlikely humanitarian amid the Holocaust."
        },
        {
            rank: 6,
            title: "Pulp Fiction",
            year: 1994,
            poster: "/pulpfiction.jpg",
            rating: 8.9,
            genres: ["Crime", "Drama"],
            runtime: "2h 34m",
            description: "The lives of two mob hitmen, a boxer, and a gangster intertwine in tales of violence and redemption."
        },
        {
            rank: 7,
            title: "The Lord of the Rings: Return of the King",
            year: 2003,
            poster: "/lotr3.jpg",
            rating: 8.9,
            genres: ["Adventure", "Drama", "Fantasy"],
            runtime: "3h 21m",
            description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam."
        },
        {
            rank: 8,
            title: "Fight Club",
            year: 1999,
            poster: "/fightclub.jpg",
            rating: 8.8,
            genres: ["Drama"],
            runtime: "2h 19m",
            description: "An office worker and a soap maker form an underground fight club with unexpected consequences."
        },
        {
            rank: 9,
            title: "Forrest Gump",
            year: 1994,
            poster: "/forrestgump.jpg",
            rating: 8.8,
            genres: ["Drama", "Romance"],
            runtime: "2h 22m",
            description: "The presidencies of Kennedy and Johnson, Vietnam, and more unfold through the life of Forrest Gump."
        },
        {
            rank: 10,
            title: "Inception",
            year: 2010,
            poster: "/inception.jpg",
            rating: 8.7,
            genres: ["Action", "Adventure", "Sci-Fi"],
            runtime: "2h 28m",
            description: "A thief who steals corporate secrets through dream-sharing technology is given a chance at redemption."
        },
    ]);

    return (
        <main className="bg-black text-white min-h-screen">
            {/* Ranking Grid */}
            <section className="px-6 py-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies.map((movie) => (
                    <div
                        key={movie.rank}
                        className={`relative group rounded-xl overflow-hidden shadow-lg ${movie.rank <= 10
                                ? "border-2 border-yellow-500"
                                : "border border-gray-700"
                            }`}
                    >
                        {/* Poster */}
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                            <p className="text-sm text-gray-300">{movie.description}</p>
                        </div>

                        {/* Rank */}
                        <div className="absolute top-2 left-2 bg-[#505050] px-2 py-1 rounded-md text-sm">
                            #{movie.rank}
                        </div>

                        {/* Info */}
                        <div className="p-4 bg-[#1c1c1c]">
                            <h2 className="font-semibold">
                                {movie.title}{" "}
                                <span className="text-gray-400">({movie.year})</span>
                            </h2>
                            <p className="text-gray-400 text-sm">{movie.genres.join(", ")}</p>
                            <div className="flex justify-between text-sm mt-2 text-gray-300">
                                <span>⭐ {movie.rating}</span>
                                <span>{movie.runtime}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Ranking;
