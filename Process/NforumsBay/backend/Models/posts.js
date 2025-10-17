import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
    postNumber: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    textContent: {
        type: String,
        required: false,
    },
    //refrence to the thread
    thread_id: {

    },
    replied_to: {
        type: String,
        required: false,
    },

    media: [{ file_id, file_name, mime_type, thumbnail }],

    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category', // This is the key part that links to the Category model
        required: true,
    },
}, {
    timestamps: true,
});

const postModel = mongoose.model('posts', postSchema);

export default postModel;