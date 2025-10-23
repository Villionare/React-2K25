import express from "express";
import handleGetAllThreads from "../Controllers/threads/handleGetAllThreads.js";
import handleSeeThread from "../Controllers/threads/handleSeeThread.js";
import handleCreateThread from "../Controllers/threads/handleCreateThread.js";
import allowAnonymousOrAdmin from "../Middlewares/eitherAnonORAdmin.js";
import handleReply from "../Controllers/posts/handleReply.js";
// mergeParams:true allows this router to access params from parent mount path
const threadRouter = express.Router({ mergeParams: true });

//threads
threadRouter.get('/',allowAnonymousOrAdmin, handleGetAllThreads); //getting all the threads
threadRouter.get('/:thread_id',allowAnonymousOrAdmin, handleSeeThread); //showing one thread
threadRouter.post('/:thread_id/reply',allowAnonymousOrAdmin, handleReply); //showing one thread
threadRouter.post('/create_op', allowAnonymousOrAdmin, handleCreateThread); //Creating a OP post (thread)

export default threadRouter;