import http from "http";
import express from "express";
import dotenv from "dotenv";
import threadRouter from "./Routes/threadRoutes.js";
import boardsRoutes from "./Routes/boardsRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import mongoConnect from "./Controllers/others/mongoConnect.js";
import cors from "cors";
import anonymousRouter from "./Routes/anonymousRoutes.js";
import test from "./Controllers/others/test.js";
import sessionForBothUsers from "./SessionControl/adminSession.js";
import userCheck from "./Controllers/Users/userCheck.js";
import homeData from "./Controllers/others/homeData.js";
import allowAnonymousOrAdmin from "./Middlewares/eitherAnonORAdmin.js";
import send_DBData from "./Controllers/others/send_DBData.js";
import postsRouter from "./Routes/postsRoutes.js";
import { Server } from "socket.io";
dotenv.config();

const app = express();
const port = process.env.PORT || 5555;

// Allow CORS from the frontend and allow credentials (cookies) to be sent.
// Replace the origin below with your frontend origin in production.
app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true, //only this way cookies can be recieved
}));

app.set("view engine", "ejs");
app.set('trust proxy', true); //this is used to get the ip of client
app.use(express.json());
app.use(express.static('./public'));

//SESSIONS
app.use(sessionForBothUsers); //this session is created globally for any route

//ROUTES

app.get('/test', test);
app.get('/api/home_data', homeData);
app.get('/api/data', allowAnonymousOrAdmin, send_DBData);

//frontend access to user type
app.get('/api/me', userCheck);

//admin
app.use('/api/admin', adminRoutes);

//anonymous
app.use('/api/anonymous', anonymousRouter);

//boards
app.use('/api/boards', boardsRoutes);

//threads
app.use('/api/boards/:slug/threads', threadRouter);

//posts
app.use('/api/post', postsRouter);

const serverMain = http.createServer(app);

//attaching the socket.io server to the http server.
const io = new Server(serverMain, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
});

//defining the socket io event handlers.

io.on("connection", (socket) => {
    console.log("new connection established: ", socket.id);

    socket.on('custom_wala', (message) => {
        console.log('this is the message recieved from the client: ', message);
    })

    socket.on('outside', (message) => {
        console.log('this is the message recieved from the client: ', message);
    })

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

io.emit('delay_event', 'ye hai server se gaya hua');

// io.on('outside', (message) => {
//     console.log('this is the message recieved from the client: ', message);
// })

serverMain.listen(port, () => {
    console.log(`🛜 ` + ` Server listening on port ${port}!!!`)
    mongoConnect(process.env.MONGO_CONNECT);
});