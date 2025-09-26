import express from "express";
import dotenv from "dotenv";
import postsRouter from "./Routes/postsRoutes.js";
import threadRouter from "./Routes/threadRoutes.js";
import boardsRoutes from "./Routes/boardsRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import os from "os";
import mongoConnect from "./Controllers/mongoConnect.js";
import expressSession from "express-session";
import cookieparser from "cookie-parser";
import cors from "cors";
import anonymousRouter, { anonymousRouterget } from "./Controllers/anonymousRoutes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5555;

app.set("view engine", "ejs");

app.use(express.json());
// Allow CORS from the frontend and allow credentials (cookies) to be sent.
// Replace the origin below with your frontend origin in production.
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
// app.use(cors());


app.use(cookieparser());

//for session management
const adminSession = Session({
    secret: "baySecret", //creates a hash of the session id to be used in the cookie
    resave: false, //if the value is unchanged so the server won't save again (cause load)
    saveUninitialized: false, //agar koi uninitialised data aa raha hai to use save mat karo server pe (cause load)
    cookie: {
        maxAge: 1000 * 60 * 30,  // 30 minutes
        httpOnly: true,           // prevents client-side JS from accessing cookie
        secure: false,            // set to true in production (HTTPS only)
        sameSite: 'lax'           // adjust as needed; for cross-site requests you may need 'none' + secure:true
    }
});

app.use(express.static('./public'));

app.get('/test/:id', async (req, res) => {

    const serverInfo = {
        system: {
            platform: os.platform(),
            arch: os.arch(),
            cpuCount: os.cpus().length,
            cpus: os.cpus().map(cpu => cpu.model),
            totalMem: os.totalmem(),
            freeMem: os.freemem(),
            uptime: os.uptime(),
            hostname: os.hostname(),
        },
        request: {
            method: req.method,
            url: req.url,
            headers: req.headers,
            ip: req.ip,
            protocol: req.protocol,
            query: req.query,
        },
        response: {
            statusCode: res.statusCode,
            locals: res.locals,
        },
        page: {
            time: new Date().toISOString(),
            test_params: req.params.id
        },
    };
    res.render("test_index", { serverInfo });
});

//admin login
app.use('/api/admin', adminRoutes);
//boards
app.use('/api/boards', boardsRoutes);
//threads
app.use('/api/boards/:board_id/threads', threadRouter);
//posts
app.use('/api/boards/:boards_id/threads/:thread_id', postsRouter);
//anonymous
app.post('/api/anonymous', anonymousRouter);
app.get('/api/anonymous', anonymousRouterget);

//session security
// app.get('/dashboard', (req, res) => {
//     if (req.session.user) {
//         res.send(`Hello ${req.session.user.username}, welcome to your dashboard`);
//     } else {
//         res.status(401).send('You must log in first');
//     }
// });


app.listen(port, () => {
    console.log(`🛜 ` + ` Server listening on port ${port}!`)
    mongoConnect(process.env.MONGO_CONNECT);
});