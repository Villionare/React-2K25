import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({

    movieId: {
        type: String,
        required: true
    },
    // reference to external movie API (like TMDB/IMDB ID)
    name: String,
    year: Number,
    rating: Number, // rating from API, not user rating
    poster: String,
}, { _id: false }); // prevent creating sub _id for each movie

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }, // store hashed password
        email: {
            type: String,
            required: true,
            unique: true
        },
        profilePicture: {
            type: String,
            default: ""
        },

        bookmarks: [movieSchema], // array of movies

        lastTheme: {
            type: String,
            enum: ["light", "dark"],
            default: "light"
        },

        searchHistory: [
            {
                query: String,
                searchedAt: { type: Date, default: Date.now },
            },
        ],

        bio: {
            type: String,
            default: ""
        },

        watchedMovies: [
            {
                movie: [movieSchema],
                watchedAt: { type: Date, default: Date.now },
                userRating: { type: Number, min: 0, max: 10 }, // rating given by user
            },
        ],
    },
    { timestamps: true }
);

const userModel = mongoose.model("USER_MODEL", userSchema);

export default userModel;
