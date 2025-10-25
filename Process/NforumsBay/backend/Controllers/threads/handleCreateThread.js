//handleCreateThread means creation of ORIGINAL POST, i will eventualy create a thread doc. in the db consisting the 
//op as the face index and replies docs. following up in that thread doc.

import boardsItemsModel from '../../Models/content/boards.js';
import threadsModel from '../../Models/content/threads.js';
import handleCreateOP from './op_posts/handleCreateOP.js';
import op_postModel from '../../Models/content/op_posts.js';

const handleCreateThread = async (req, res) => {

    try {
        const { username, textContent, media, title } = req.body;

        if (!username || !textContent || !media || !title) {
            req.status(400).json({
                "message": "queries are missing"
            });
        }

        //getting the board id in which the thread will be created.
        const slug = req.params.slug;
        const getBoardWithId = await boardsItemsModel.findOne({ slug });

        if (getBoardWithId === null) {
            res.status(400).json({
                "message": `no board exists with id ${board_Id}`
            })
        }

        //CREATING THE OP
        const OP_POST = await handleCreateOP(username, textContent, media, title, getBoardWithId);
        console.log(OP_POST);


        //after the post is successfully created, we can create the thread using the OP_post id.
        const getAllThreadsNumbers = await threadsModel.countDocuments();
        const new_thread_id = `TH_${getAllThreadsNumbers + 1}`;

        //NOW CREATING THREAD
        const createThread = await threadsModel.create({
            thread_id: new_thread_id,
            name: title,
            op_post: OP_POST._id
        });
        await createThread.save();

        //NOW WE WILL PUSH THE THREAD ID TO THE BOARD:
        await boardsItemsModel.findByIdAndUpdate(
            getBoardWithId._id,
            { $push: { threads: createThread._id } },
        );

        //NOW WE WILL BE UPDATING THE OP_POST MODEL
        await op_postModel.findByIdAndUpdate(OP_POST._id, { thread_id: createThread._id });

        //opPost.thread = thread._id;
        // await OP_POST.save();

        res.status(200).json({
            "message": "OP posted Successfully and intialised a thread",
            "thread_id": createThread._id,
            "OP_id": OP_POST._id,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating thread", error: error.message });
    }
}

export default handleCreateThread;