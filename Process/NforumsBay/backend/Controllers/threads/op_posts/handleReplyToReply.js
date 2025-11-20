import repliesModel from "../../../Models/content/replies.js";
import threadsModel from "../../../Models/content/threads.js";

const handleReplyOP = async (req, res) => {

    try {

        //we are using the thread_id e.g. TH_4
        const { username, textContent, to, media } = req.body;
        const thread_id = req.params.thread_id;

        if (thread_id === undefined) {
            return res.status(400).json({ message: "Thread ID is required" });
        }

        const get_Thread_ObjId = await threadsModel.findById({ thread_id });

        if (!get_Thread_ObjId) {
            return res.status(400).json({ message: `thread with this thread_id: ${thread_id}, not found` });
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

        const gettingTO_reply = await repliesModel.findById(to);

        if (!gettingTO_reply) {
            return res.status(400).json({ message: "The Reply you are replying to, does not exist!" });
        }

        gettingTO_reply.replies.push(newReply._id);
        // await gettingTO_reply.save();
        // await newReply.save();

        return res.json({
            message: "Reply made successfully",
            newReply
        });

    } catch (error) {
        console.error("Error replying to OP post:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default handleReplyOP;