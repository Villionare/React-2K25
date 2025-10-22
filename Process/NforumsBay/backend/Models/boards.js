import mongoose, { mongo } from "mongoose";

const boardsItems = new mongoose.Schema({

    board_id: {
        type: Number,
        required: true,
    },

    name: {
        type: String,
        required: true,
        unique: true
    },

    slug: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
    },

    board_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'boardCategory',
    },

    threads: [{
        type: mongoose.Schema.Types.ObjectId, //initially empty array
        ref: 'threadModel'
    }],

}, {
    timestamps: true,
});

const boardsItemsModel = mongoose.model("boards", boardsItems);

export default boardsItemsModel;

const data = {
    "Japanese Culture": [
        "Anime & Manga",
        "Anime/Cute",
        "Anime/Wallpapers",
        "Mecha",
        "Cosplay & EGL",
        "Cute/Male",
        "Flash",
        "Transportation",
        "Otaku Culture",
        "Virtual YouTubers",
        "Video Games",
        "Video Games",
        "Video Game Generals",
        "Video Games/Multiplayer",
        "Video Games/Mobile",
        "Pokémon",
        "Retro Games",
        "Video Games/RPG",
        "Video Games/Strategy"
    ],
    "Interests": [
        "Comics & Cartoons",
        "Technology",
        "Television & Film",
        "Weapons",
        "Auto",
        "Animals & Nature",
        "Traditional Games",
        "Sports",
        "Extreme Sports",
        "Professional Wrestling",
        "Science & Math",
        "History & Humanities",
        "International",
        "Outdoors",
        "Toys"
    ],
    "Creative": [
        "Oekaki",
        "Papercraft & Origami",
        "Photography",
        "Food & Cooking",
        "Artwork/Critique",
        "Wallpapers/General",
        "Literature",
        "Music",
        "Fashion",
        "3DCG",
        "Graphic Design",
        "Do-It-Yourself",
        "Worksafe GIF",
        "Quests"
    ],
    "Other": [
        "Business & Finance",
        "Travel",
        "Fitness",
        "Paranormal",
        "Advice",
        "LGBT",
        "Pony",
        "Current News",
        "Worksafe Requests",
        "Very Important Posts"
    ],
    "Adult (NSFW)": [
        "Sexy Beautiful Women",
        "Hardcore",
        "Handsome Men",
        "Hentai",
        "Ecchi",
        "Yuri",
        "Hentai/Alternative",
        "Yaoi",
        "Torrents",
        "High Resolution",
        "Adult GIF",
        "Adult Cartoons",
        "Adult Requests"
    ],
    "Misc. (NSFW)": [
        "Random",
        "ROBOT9001",
        "Politically Incorrect",
        "International/Random",
        "Cams & Meetups",
        "Shit 4chan Says"
    ]
}