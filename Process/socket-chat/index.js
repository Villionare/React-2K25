import express, { response } from 'express';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import path, { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(path.join(__dirname, "public")));

//this http server was needed to create the socket connection
const httpServer = http.createServer(app);
//now creating the new socket server
const io = new Server(httpServer);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "main.html"));
});

io.on('connection', (socket) => {
    console.log('new user connected:', socket.id);

    socket.join('newroom1');
    // broadcast to all connected clients in the room
    // io.to('some room').emit('hello', 'world');

    // broadcast to all connected clients except those in the room
    // io.except('some room').emit('hello', 'world');

    // leave the room
    // socket.leave('some room');

    socket.on('chat message', (mess) => {
        io.emit('chat message', mess);
        io.emit('chat message emit', 'bhai responce ka responce lele');
    })

    //acknowledging the event of timeout
    socket.on('timeout_mess', (arg1, callback) => {
        console.log(arg1.this + arg1.is);
        callback({ status: 'oik' });
    })

    socket.on('disconnect', (user) => {
        console.log('user got disconnected:', socket.id);
    })
})

httpServer.listen(1213, () => {
    console.log('server started on port 1213');
})