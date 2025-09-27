import express from "express";
import dotenv from "dotenv";
import postsRouter from "./Routes/postsRoutes.js";
import threadRouter from "./Routes/threadRoutes.js";
import boardsRoutes from "./Routes/boardsRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import os from "os";
import session from "express-session";
import mongoConnect from "./Controllers/mongoConnect.js";
import cors from "cors";
import anonymousRouter from "./Routes/anonymousRoutes.js";
import userSession from "./SessionControl/anonymous.js";
import adminSession from "./SessionControl/adminSession.js";
import test from "./Controllers/test.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5555;


app.set("view engine", "ejs");
app.set('trust proxy', true); //this is used to get the ip of client
app.use(express.json());
// Allow CORS from the frontend and allow credentials (cookies) to be sent.
// Replace the origin below with your frontend origin in production.
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, //only this way cookies can be recieved
}));
app.use(express.static('./public'));

//SESSIONS
app.use('/api/admin', adminSession);
app.use('/api/anonymous', userSession);


//ROUTES
app.get('/checkuser', (req, res) => {

    req.session.user = { id: user._id, role: "admin" };

    console.log(req.session);

    res.json({
        message: "no idea"
    })

})

app.get("/login", (req, res) => {
    req.session.user = { id: "123", role: "admin" };
    res.send("Logged in!");
});

app.get("/dashboard", (req, res) => {
    if (req.session.user) {
        res.send(`Hello ${req.session.user.role}`);
    } else {
        res.status(401).send("Not logged in");
    }
});

app.get('/test/:id', test);

//admin login
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