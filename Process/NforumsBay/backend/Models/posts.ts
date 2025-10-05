import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    media: {
        src: {
            type: String,
        }
    },
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