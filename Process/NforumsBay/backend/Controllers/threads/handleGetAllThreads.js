import threadsModel from "../../Models/content/threads.js";

const handleGetAllThreads = async (req, res) => {

    const board_id = await req.params.board_id;

    const fetchBoard = await threadsModel.find({ board_id: board_id }).populate('op_posts');

    if (!fetchBoard) {
        return res.status(404).json({
            message: "No threads found for this board."
        });
    }

    const allThreads = await threadsModel.threads;

    return res.status(200).json({
        allThreads,
        fetchBoard
    });
}

export default handleGetAllThreads;