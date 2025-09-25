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
dotenv.config();

const app = express();
const port = process.env.PORT || 5555;

app.set("view engine", "ejs");

app.use(cors())
app.use(cookieparser());

//for session management
app.use(expressSession({
    secret: "this_is_the_secret",
    resave: false, //if the value is unchanged so the server won't save again (cause load)
    saveUninitialized: false, //agar koi uninitialised data aa raha hai to use save mat karo server pe (cause load)
}));

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

app.get('/session', (req, res) => {

    // creating the session on the server
    req.session.user = {
        name: "temp_baba",
        age: "+999"
    };

    console.log(req.session);
    res.send("cookie has been generated for you")
})

app.get('/deletesession', (req, res) => {

    // this will destroy the session from ther server
    req.session.destroy();
    res.send("session has been destroyed");
});

app.get('/checksession', (req, res) => {
    if (req.session?.user?.name === "temp_baba" ?? null) {
        res.send(`welcome ${req.session.user.name}`)
    } else {
        res.send("can't confirm you");
    }
})

app.get('/setcookie', async (req, res) => {
    //creating and saving the cookie to the client
    res.cookie("setcookie", "haan done");
    res.send("cookie has been set");
});

app.get('/deletecookie', async (req, res) => {

    //creating and saving the cookie to the client
    res.clearCookie("setcookie");
    res.send("cookie has been deleated");
});

app.get('/checkcookies', (req, res) => {
    console.log(req.cookies);
    res.send("cookie has been sent to the server");
})

//admin login
app.use('/api/admin', adminRoutes);
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