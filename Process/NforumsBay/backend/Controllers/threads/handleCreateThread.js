import boardsItemsModel from '../../Models/content/boards.js';
import threadsModel from '../../Models/content/threads.js';
import op_postModel from '../../Models/content/op_posts.js';

const handleCreateThread = async (req, res) => {
    try {
        const { username, textContent, media, title } = req.body;

        // ✅ FIX: Use res.status() not req.status()
        if (!username || !textContent || !media || !title) {
            return res.status(400).json({
                "message": "queries are missing"
            });
        }

        // ✅ FIX: Get board correctly
        const slug = req.params.slug;
        const getBoardWithId = await boardsItemsModel.findOne({ slug });

        if (!getBoardWithId) {
            return res.status(400).json({
                "message": `no board exists with slug ${slug}`
            });
        }

        // ✅ FIXED: Calculate postNumber FIRST (before create)
        const getAllPostsNumbers = await op_postModel.countDocuments();
        const newPostNumber = getAllPostsNumbers + 1;  // Sequential: 1,2,3...

        // ✅ FIXED: Create OP with postNumber (NO .save() needed)
        const createOP_post = await op_postModel.create({
            op_id: `OP_${newPostNumber}`,
            postNumber: newPostNumber,  // 👈 THIS FIXES DUPLICATE KEY
            username,
            title,
            textContent,
            media,
            board: getBoardWithId._id,
            // thread_id will be added later
        });

        // ✅ Calculate thread ID
        const getAllThreadsNumbers = await threadsModel.countDocuments();
        const new_thread_id = `TH_${getAllThreadsNumbers + 1}`;

        // ✅ Create Thread
        const createThread = await threadsModel.create({
            thread_id: new_thread_id,
            name: title,
            op_post: createOP_post._id
        });

        // ✅ Push thread to board
        await boardsItemsModel.findByIdAndUpdate(
            getBoardWithId._id,
            { $push: { threads: createThread._id } }
        );

        // ✅ Update OP with thread_id
        await op_postModel.findByIdAndUpdate(
            createOP_post._id,
            { thread_id: createThread._id }
        );

        // ✅ SUCCESS RESPONSE
        res.status(201).json({  // 👈 Changed to 201 (Created)
            "message": "OP posted successfully and thread initialized",
            "thread_id": createThread._id,
            "OP_id": createOP_post._id,
            "postNumber": newPostNumber
        });

    } catch (error) {
        console.error("Error creating thread:", error);
        res.status(500).json({
            message: "Error creating thread",
            error: error.message
        });
    }
};

export default handleCreateThread;