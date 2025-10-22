import express from "express";
import handleListAllPosts from "../Controllers/posts/handleListAllPosts.js";
const postsRouter = express.Router();

//posts
postsRouter.get('/posts', handleListAllPosts); //showing all the posts
// Note: there's no createPost controller yet; using handleCreateThread would be incorrect.
// If a create post handler exists, replace `handleCreateThread` with it. For now respond 501.

postsRouter.post('/post', (req, res) => {
    res.status(501).json({ error: 'Not implemented: create post handler' });
}); //create a post

export default postsRouter;