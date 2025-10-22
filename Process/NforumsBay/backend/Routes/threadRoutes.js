import express from "express";
import handleGetAllThreads from "../Controllers/threads/handleGetAllThreads.js";
import handleSeeThread from "../Controllers/threads/handleSeeThread.js";
import handleCreateThread from "../Controllers/threads/handleCreateThread.js";
// mergeParams:true allows this router to access params from parent mount path
const threadRouter = express.Router({ mergeParams: true });

//threads
threadRouter.get('/', handleGetAllThreads); //getting all the threads
threadRouter.get('/:thread_id', handleSeeThread); //showing one thread
threadRouter.post('/create_op', handleCreateThread); //Creating a OP post (thread)

export default threadRouter;