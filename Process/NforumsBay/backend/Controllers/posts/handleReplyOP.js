import op_postModel from "../../Models/op_posts.js";
import repliesModel from "../../Models/replies.js";

const handleReplyOP = async (req,res) => {
    
    try {    
    
    const { username, textContent, to, media} = req.body; 
    const thread_id = req.params.thread_id;

    if(thread_id === undefined){
        return res.status(400).json({message: "Thread ID is required"});
    }

    if(!username || !to || !textContent || !media){
        return res.status(400).json({message: "Missing required fields"});
    }    

    //create reply number
    //replyNumber
    const replyNumber = await repliesModel.countDocuments();
    const replyId = `REP_${replyNumber + 1}`;

    // creating the reply
    const newReply = await repliesModel.create({
        replyId,
        username,
        textContent,
        to,
        media,
        thread_id,
    })    

    //linking the reply to the original post
    const gettingTO = await op_postModel.findById(to);
    if(!gettingTO){
        return res.status(404).json({message: "Original Post not found"});
    }    

    gettingTO.replies.push(newReply._id);
    await gettingTO.save();
    await newReply.save();

    return res.json({
       "message": "Reply made successfully", 
        thread_id,
        replyId,
        username,
        textContent,
        to,
        media,
    });    

    }catch (error) {
        console.error("Error replying to OP post:", error);
        return res.status(500).json({message: "Internal server error"});
    }   
}

export default handleReplyOP;