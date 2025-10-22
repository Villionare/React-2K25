import express from "express";
import handleListAllPosts from "../Controllers/posts/handleListAllPosts.js";
// mergeParams:true allows access to params from parent routers (board_id, thread_id)
const postsRouter = express.Router({ mergeParams: true });

//posts
postsRouter.get('/posts', handleListAllPosts); //showing all the posts
// Note: there's no createPost controller yet; using handleCreateThread would be incorrect.
// If a create post handler exists, replace `handleCreateThread` with it. For now respond 501.

postsRouter.post('/post', (req, res) => {
    res.status(501).json({ error: 'Not implemented: create post handler' });
}); //create a post

export default postsRouter;