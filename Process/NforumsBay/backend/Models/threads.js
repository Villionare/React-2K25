import mongoose from "mongoose";
const { Schema } = mongoose;

const threadSchema = new Schema({
    thread_id: Number,
    name: String,
    description: String,
    op_post: {
        name: String,
        description: String,
        user: String,
        date: { type: Date, default: Date.now },
        file: Schema.Types.Mixed,
        url: [String],
        replies: [{
            type: Schema.Types.ObjectId,
            ref: 'posts'
        }]
    }
});

const threadsModel = mongoose.model('threadModel', threadSchema);

export default threadsModel;