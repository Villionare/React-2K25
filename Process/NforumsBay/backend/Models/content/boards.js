import mongoose, { Schema } from "mongoose";

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
        type: Schema.Types.ObjectId,
        ref: 'boardCategory',
    },

    threads: [{
        type: Schema.Types.ObjectId, //initially empty array
        ref: 'threadModels'
    }],

}, {
    timestamps: true,
});

const boardsItemsModel = mongoose.model("boards", boardsItems);

export default boardsItemsModel;

    '0': ObjectId('68fbbf745f1861e68c03effc'),
    '1': ObjectId('68fbbf745f1861e68c03effd'),
    '2': ObjectId('68fbbf745f1861e68c03effe'),
    '3': ObjectId('68fbbf745f1861e68c03efff'),
    '4': ObjectId('68fbbf745f1861e68c03f000'),
    '5': ObjectId('68fbbf745f1861e68c03f001'),
    '6': ObjectId('68fbbf745f1861e68c03f002'),
    '7': ObjectId('68fbbf745f1861e68c03f003'),
    '8': ObjectId('68fbbf745f1861e68c03f004'),
    '9': ObjectId('68fbbf745f1861e68c03f005'),
    '10': ObjectId('68fbbf745f1861e68c03f006'),
    '11': ObjectId('68fbbf745f1861e68c03f007'),
    '12': ObjectId('68fbbf745f1861e68c03f008'),
    '13': ObjectId('68fbbf745f1861e68c03f009'),
    '14': ObjectId('68fbbf745f1861e68c03f00a'),
    '15': ObjectId('68fbbf1d5f1861e68c03efc7'),
    '16': ObjectId('68fbbf1d5f1861e68c03efc8'),
    '17': ObjectId('68fbbf1d5f1861e68c03efc9'),

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