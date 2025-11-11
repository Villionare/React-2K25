const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on("chat message emit", (data) => {
    console.log("Server ne bola:", data);
});

socket.timeout(5000).emit('timeout_mess', { this: "this", is: "is" }, (err, response) => {
    if (err) {
        // the server did not acknowledge the event in the given delay
        console.log('server failed to acknowledge the timeout event');
    } else {
        console.log(response.status); // 'ok'
    }
});