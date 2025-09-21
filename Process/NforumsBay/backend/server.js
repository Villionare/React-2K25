import express from "express";
import dotenv from "dotenv";
import handleListBoards from "./Controllers/handleListBoards.js";
import handleCreateThread from "./Controllers/handleCreateThread.js";
import handleGetAllThreads from "./Controllers/handleGetAllThreads.js";
import handlCreateBoard from "./Controllers/handlCreateBoard.js";
import handleSeeThread from "./Controllers/handleSeeThread.js";
import handleCheckAdmin from "./Middlewares/handleCheckAdmin.js";
import handleListAllPosts from "./Controllers/handleListAllPosts.js";
import test from "./Controllers/test.js";
dotenv.config();

const app = express();

const port = process.env.PORT || 5555;

// GET /boards: List all boards.
// POST /boards: Create board (protect with simple JWT if admin).
// GET /boards/:id/threads: List threads in a board.
// POST /boards/:id/threads: Create thread (handle Multer for image upload, store on Cloudinary, save URL to DB).

app.get('/test/:id', test);

//admin login
app.post('/api/admin_login');
app.post('/api/admin_signup');

//boards
app.get('/api/boards', handleListBoards); //listing all the boards
app.post('/api/boards', handleCheckAdmin, handlCreateBoard); //creating a board

//threads
app.get('/api/boards/:board_id/threads', handleGetAllThreads); //getting all the threads
app.get('/api/boards/:board_id/threads/:thread_id', handleSeeThread); //showing one thread
app.post('/api/boards/:board_id/threads', handleCreateThread); //Creating a thread

//posts
app.get('/api/boards/:boards_id/threads/:thread_id/posts', handleListAllPosts); //showing all the posts
// Note: there's no createPost controller yet; using handleCreateThread would be incorrect.
// If a create post handler exists, replace `handleCreateThread` with it. For now respond 501.
app.post('/api/boards/:boards_id/threads/:thread_id/post', (req, res) => {
    res.status(501).json({ error: 'Not implemented: create post handler' });
}); //create a post

//error handling for any route
app.use((err, res, req, next) => {

    if (res.headersSent) {
        return next(err);
    }

    res.status(500);
    res.send('we have an error in here!' + err);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));