import express from "express";
import dotenv from "dotenv";
import postsRouter from "./Routes/postsRoutes.js";
import threadRouter from "./Routes/threadRoutes.js";
import boardsRoutes from "./Routes/boardsRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import mongoConnect from "./Controllers/mongoConnect.js";
import cors from "cors";
import anonymousRouter from "./Routes/anonymousRoutes.js";
import test from "./Controllers/test.js";
import adminSession from "./SessionControl/adminSession.js";
import sessionForBothUsers from "./SessionControl/adminSession.js";
import adminCheck from "./Middlewares/adminCheck.js";
import userCheck from "./Controllers/userCheck.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5555;

// Allow CORS from the frontend and allow credentials (cookies) to be sent.
// Replace the origin below with your frontend origin in production.
app.use(cors({
    origin: 'http://localhost:5174',
    // origin: 'http://localhost:5173',
    credentials: true, //only this way cookies can be recieved
}));

app.set("view engine", "ejs");
app.set('trust proxy', true); //this is used to get the ip of client
app.use(express.json());
app.use(express.static('./public'));

//SESSIONS
app.use(sessionForBothUsers); //this session is created globally for any route

//ROUTES
app.get("/api/dashboard", (req, res) => {
    if (req.session.user) {
        res.send(`Hello ${req.session.user.role}`);
        console.log(req.session);

    } else {
        res.status(401).send("Not logged in");
    }
});

app.get('/test', test);

//frontend access to user type
app.get('/api/me', userCheck);
// {
//     message: 'Session Exists',
//     data: req.session.user
// }

//admin
app.use('/api/admin', adminRoutes);

//anonymous
app.use('/api/anonymous', anonymousRouter);

//boards
app.use('/api/boards', boardsRoutes);

//threads
app.use('/api/boards/:board_id/threads', threadRouter);

//posts
app.use('/api/boards/:boards_id/threads/:thread_id', postsRouter);


app.listen(port, () => {
    console.log(`🛜 ` + ` Server listening on port ${port}!`)
    mongoConnect(process.env.MONGO_CONNECT);
});