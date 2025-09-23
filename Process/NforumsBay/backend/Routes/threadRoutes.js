import express from "express";
import handleGetAllThreads from "../Controllers/handleGetAllThreads.js";
import handleSeeThread from "../Controllers/handleSeeThread.js";
import handleCreateThread from "../Controllers/handleCreateThread.js";
const threadRouter = express.Router();

//threads
threadRouter.get('/', handleGetAllThreads); //getting all the threads
threadRouter.get('/:thread_id', handleSeeThread); //showing one thread
threadRouter.post('/', handleCreateThread); //Creating a thread

export default threadRouter;