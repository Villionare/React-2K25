import mongoose from "mongoose";
const { Schema } = mongoose;

const threadSchema = new Schema({
    thread_id: String,
    name: String, //thread name is the same as the op post title
    
    op_post: {
       type: Schema.Types.ObjectId,
    },
    
    replies: [{
            type: Schema.Types.ObjectId,
            ref: 'posts'
        }]
});

const threadsModel = mongoose.model('threadModel', threadSchema);

export default threadsModel;