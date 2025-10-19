import express from "express";
import handleGetAllThreads from "../Controllers/threads/handleGetAllThreads.js";
import handleSeeThread from "../Controllers/threads/handleSeeThread.js";
import handleCreateThread from "../Controllers/threads/handleCreateThread.js";
const threadRouter = express.Router();

//threads
threadRouter.get('/', handleGetAllThreads); //getting all the threads
threadRouter.get('/:thread_id', handleSeeThread); //showing one thread
threadRouter.post('/', handleCreateThread); //Creating a thread

export default threadRouter;