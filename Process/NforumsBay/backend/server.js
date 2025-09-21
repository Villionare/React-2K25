import express from "express";
import dotenv from "dotenv";
import handleListBoards from "./Controllers/handleListBoards";
import handleCreateThread from "./Controllers/handleCreateThread";
import handleGetAllThreads from "./Controllers/handleGetAllThreads";
import handlCreateBoard from "./Controllers/handlCreateBoard";
import handleSeeThread from "./Controllers/handleSeeThread";
import handleCheckAdmin from "./Middlewares/handleCheckAdmin";
import handleListAllPosts from "./Controllers/handleListAllPosts";
dotenv.config();

const port = process.env.PORT || 5555;

// GET /boards: List all boards.
// POST /boards: Create board (protect with simple JWT if admin).
// GET /boards/:id/threads: List threads in a board.
// POST /boards/:id/threads: Create thread (handle Multer for image upload, store on Cloudinary, save URL to DB).

const app = express();
app.get('/test', (req, res) => {
    res.json({
        "message": "server is running",
    })
})

//admin login
app.post('/api/admin_login');
app.post('/api/admin_signup');

//boards
app.get('/api/boards', handleListBoards); //listing all the boards
app.post('/api/boards', handleCheckAdmin, handlCreateBoard); //creating a board

//threads
app.get('/api/boards/:id/threads', handleGetAllThreads); //getting all the threads
app.get('/api/boards/:id/threads/:id', handleSeeThread); //showing one thread
app.post('/api/boards/:id/threads', handleCreateThread); //Creating a thread

//posts
app.get('/api/boards/:boards_id/threads/:thread_id/posts', handleListAllPosts); //showing all the posts
app.post('/api/boards/:boards_id/threads/:threads_id/post', handleCreateThread); //create a post

app.listen(port, () => console.log(`Example app listening on port ${port}!`));