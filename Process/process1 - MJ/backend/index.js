import express from "express"
import connectDB from './controllers/MongoConnect.js';
import dotenv from "dotenv"
import cors from 'cors'
import loginUser from "./controllers/login.js";
import signUpUser from "./controllers/signUp.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//get - get data from the server
//post - create new resource
//put - update an entire resource
//patch - update the part of a resource
//delete - delete a resource
//options - Ask the server which HTTP methods are supported.
//head - Similar to GET, but fetches only headers (no response body).

app.use(express.json());
app.use(cors());

app.route('/api/auth/signup')
    .post(signUpUser);

app.route('/api/auth/signin')
    .post(loginUser);

app.route('/check/:id')
    .get((req, res) => {
        const { data } = req.body;

        res.status(200).json(
            {
                'method': req.method,
                'url': req.url,
                'query': req.query,
                'params': req.params,
                'status': "OK",
                'recieved data': data
            }
        )
    })

    .post((req, res) => {
        const { name, age } = req.body;

        res.json({
            'status': 'OK',
            'recieved data': {
                name,
                age
            }
        })
    })

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
    connectDB(process.env.DB_CONNECTION);
});