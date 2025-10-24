import boardsItemsModel from '../../Models/content/boards.js';
import threadsModel from '../../Models/content/threads.js';
import handleCreateOP from './op_posts/handleCreateOP.js';

const handleCreateThread = async (req, res) => {

    //handleCreateThread means creation of ORIGINAL POST, i will eventualy create a thread doc. in the db consisting the 
    //op as the face index and replies docs. following up in that thread doc.

    try {
        const { username, textContent, media, title } = req.body;

        if (!username || !textContent || !media || !title) {
            req.status(400).json({
                "message": "queries are missing"
            });
        }

        //getting the board id in which the thread will be created.
        const board_Id = req.params.board_id;
        const getBoardWithId = await boardsItemsModel.findOne({ board_id: board_Id });

        if (getBoardWithId === null) {
            res.status(400).json({
                "message": `no board exists with id ${board_Id}`
            })
        }

        //generate thread_id
        const getAllThreadsNumbers = await threadsModel.countDocuments();
        const new_thread_id = `TH_${getAllThreadsNumbers + 1}`;

        //after the post is successfully created, we can create the thread using the OP_post id.
        const createThread = await threadsModel.create({
            thread_id: new_thread_id,
            name: title,
        });

        if (createThread) {
            //now creating the ORIGINAL POST
            const OP_POST = handleCreateOP(username, textContent, media, title, createThread, getBoardWithId)

            //setting the op id to the newely created thread.
            createThread.op_post = OP_POST._id;
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