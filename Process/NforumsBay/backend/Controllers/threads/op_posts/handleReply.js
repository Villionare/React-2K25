import op_postModel from "../../../Models/content/op_posts.js";
import repliesModel from "../../../Models/content/replies.js";
import threadsModel from "../../../Models/content/threads.js";

const handleReplyOP = async (req, res) => {

    try {

        const { username, textContent, to, media } = req.body;
        const thread_id = req.params.thread_id;

        if (thread_id === undefined) {
            return res.status(400).json({ message: "Thread ID is required" });
        }

        const get_Thread_ObjId = await threadsModel.findOne({ thread_id });

        if (!get_Thread_ObjId) {
            return res.status(400).json({ message: `thread with this thread_id: ${thread_id} not found` });
        }

        if (!username || !to || !textContent || !media) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        //create reply number
        //replyNumber
        const replyNumber = await repliesModel.countDocuments();
        const reply_Id = `REP_${replyNumber + 1}`;

        // creating the reply
        const newReply = await repliesModel.create({
            reply_Id,
            username,
            textContent,
            to,
            media,
            thread_id: get_Thread_ObjId._id,
        });

        // now there are 3 scenerios where a reply can be made to op or to an existing reply.

        // 1 -if the reply made is to an OP post
        // 2 -if the reply made is to an existing reply
        // 3 -if their is no post found to reply to.

        //linking the reply to the original post
        const gettingTO_op = await op_postModel.findById(to);

        if (gettingTO_op) {
            const gettingThread = await threadsModel.findById(thread_id);

            gettingThread.replies.push(newReply._id);
            gettingTO_op.replies.push(newReply._id);

            await gettingTO_op.save();
            await newReply.save();
            await gettingThread.save();
        }

        // 2 -if the reply made is to an existing reply
        const gettingTO_reply = await repliesModel.findById(to);

        if (gettingTO_reply) {
            gettingTO_reply.replies.push(newReply._id);
            await gettingTO_reply.save();
            await newReply.save();
        }

        if (gettingTO_op === null && gettingTO_reply === null) {
            return res.status(400).json({ message: "The post you are replying to does not exist" });
        }

        return res.json({
            "message": "Reply made successfully",
            newReply
        });

    } catch (error) {
        console.error("Error replying to OP post:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default handleReplyOP;