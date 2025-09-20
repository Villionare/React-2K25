import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5555;

const app = express();

app.get('/api/test', (req, res) => res.send('Server is running....'));
app.get('/api/message/recieve', (req, res) => res.send('Server is running....'));
app.post('/api/message/send', (req, res) => res.send('Server is running....'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));