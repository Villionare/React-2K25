import mongoose from "mongoose";

const threadSchema = mongoose.Schema({

    thread_id: {
        type: Number
    },

    name: {
        type: String,
    },

    description: {
        type: String,
    },

    op_post: {
        name: {
            type: String,
            description: String,
            user: String,
            date: new Date(),
            file: null,
            url: [],
            replies: [{
                type: reftoposts,  //these are the repiles to the op post, that will potencially create a thead.
                unique: true,
            }],
        }
    }
});

const threadsModel = mongoose.model('threadModel', threadSchema);

export default threadsModel;