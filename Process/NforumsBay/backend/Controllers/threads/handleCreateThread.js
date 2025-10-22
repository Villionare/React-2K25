import threadsModel from '../../Models/threads.js';

const handleCreateThread = async (req, res) => {
    try {
        // Implementation needed
        res.json({ "message": "creating the thread" });
    } catch (error) {
        res.status(500).json({ message: "Error creating thread", error: error.message });
    }
}

export default handleCreateThread;