import express from "express";
import dotenv from "dotenv";
import postsRouter from "./Routes/postsRoutes.js";
import threadRouter from "./Routes/threadRoutes.js";
import boardsRoutes from "./Routes/boardsRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import os from "os";
import mongoConnect from "./Controllers/mongoConnect.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5555;

app.set("view engine", "ejs");
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

app.listen(port, () => {
    console.log(`🛜 ` + ` Server listening on port ${port}!`)
    mongoConnect(process.env.MONGO_CONNECT);
});