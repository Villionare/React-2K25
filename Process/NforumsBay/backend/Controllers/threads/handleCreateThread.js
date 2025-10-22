import boardsItemsModel from '../../Models/boards.js';
import op_postModel from '../../Models/op_posts.js';
import threadsModel from '../../Models/threads.js';

const handleCreateThread = async (req, res) => {

    //handleCreateThread means creation of ORIGINAL POST, will will eventualy create a thread doc. in the db consisting the 
    //op as index and replies docs. following up

    try {
        const {username, textContent,media, title } = req.body;
        const board_Id = req.params.board_id;

        //gerate post number here
        //postNumber

        // const getAllPostsNumbers
        
        //generate thread_id
        //thread_id
        
        //add to the board using the object id of the board.

        const getBoardWithId = await boardsItemsModel.findOne({board_id: board_Id});

        const createOP_post = await op_postModel.create({
            postNumber,
            thread_id,
            username,
            textContent,
            media,
            board: getBoardWithId._id, //the board to which the post belongs to.
        });

        //after the post is successfully created, we can create the thread using the OP_post id.
        const createThread = await threadsModel.create({
            
        })

        res.json({ 
            "message": "creating the thread_",
        });

    } catch (error) {
        res.status(500).json({ message: "Error creating thread", error: error.message });
    }
}

export default handleCreateThread;