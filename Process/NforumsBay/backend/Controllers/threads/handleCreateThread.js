import boardsItemsModel from '../../Models/boards.js';
import op_postModel from '../../Models/op_posts.js';
import threadsModel from '../../Models/threads.js';

const handleCreateThread = async (req, res) => {
    
    //handleCreateThread means creation of ORIGINAL POST, will will eventualy create a thread doc. in the db consisting the 
    //op as index and replies docs. following up

    try {
        const {username, textContent, media, title } = req.body;
        //ALSO THE username WILL BE VARIFIED WHEATHER THE USED EXIST IN A SESSION OR A ADMIN - I WILL DO THIS IN THE MIDDLEWARE

        if(!username || !textContent || !media || !title){
            req.status(400).json({
                "message": "queries are missing"
            });
        }
        
        //getting the board id in which the thread will be created.
        const board_Id = req.params.board_id;
        const getBoardWithId = await boardsItemsModel.findOne({board_id: board_Id});

        if(getBoardWithId === null){
            res.status(400).json({
                "message": `no board exists with id ${board_Id}`
            })
        }
        
        //generate thread_id
        const getAllThreadsNumbers = await threadsModel.countDocuments();
        const new_thread_id = `TH/${getAllThreadsNumbers + 1}`;
        
        //after the post is successfully created, we can create the thread using the OP_post id.
        const createThread = await threadsModel.create({
            thread_id: new_thread_id,
            name: title,
            replies: [], //this will be filled onces some one replies on the op or anything,
        });

        if(createThread){
            //getting the number of posts to generate a new post ID
            const getAllPostsNumbers = await op_postModel.countDocuments();
            const new_OP_post_id = `OP/${getAllPostsNumbers + 1}`;
            
            const createOP_post = await op_postModel.create({
                postNumber: new_OP_post_id,
                username,
                title,
                thread_id: createThread._id,  //this is empty for now as no thread is created, it will be filled after thread creation.
                textContent,
                media,
                board: getBoardWithId._id, //the board to which the post belongs to.
            });
         
            //setting the op id to the newely created thread.
            createThread.op_post = createOP_post._id;
            createOP_post.save();
            createThread.save();
        }

        res.status(200).json({ 
            "message": "OP posted Successfully and intialised a thread",
            "thread_id": createThread._id,
            "OP_id": createOP_post._id,
        });

    } catch (error) {
        res.status(500).json({ message: "Error creating thread", error: error.message });
    }
}

export default handleCreateThread;