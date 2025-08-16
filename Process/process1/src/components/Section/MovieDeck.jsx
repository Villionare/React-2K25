// MovieCard.jsx
export default function MovieCard() {
    return (
        <div className="relative w-64 h-96 rounded-lg overflow-hidden shadow-lg">
            {/* Background poster */}
            <img
                src="nolan.jpg"
                alt="Movie Poster"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Label text */}
            <span className="absolute bottom-4 left-4 text-white font-bold text-xl">
                #1 this week
            </span>
        </div>
    );
}
