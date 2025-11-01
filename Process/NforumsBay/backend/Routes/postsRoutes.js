import express from "express";
import handleListAllPosts from "../Controllers/threads/op_posts/handleListAllPosts.js";
import allowAnonymousOrAdmin from "../Middlewares/eitherAnonORAdmin.js";
// mergeParams:true allows access to params from parent routers (board_id, thread_id)
const postsRouter = express.Router({ mergeParams: true });

//posts
postsRouter.post('/post',allowAnonymousOrAdmin, (req, res) => {
    
    res.status(501).json({ error: 'Not implemented: create post handler' });
}); //create a post

export default postsRouter;