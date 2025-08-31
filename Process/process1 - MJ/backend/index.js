import express from "express"
import connectDB from './controllers/MongoConnect.js';
import dotenv from "dotenv"
import userModel from "./models/user.js";
dotenv.config();

const app = express();

//get - get data from the server
//post - create new resource
//put - update an entire resource
//patch - update the part of a resource
//delete - delete a resource
//options - Ask the server which HTTP methods are supported.
//head - Similar to GET, but fetches only headers (no response body).

app.use(express.json());

app.route('/api/auth/signup')
    .get((req, res) => {
        console.log('data submitted');

        res.json({
            response: 'signup data submitted'
        });
    })
    .post((req, res) => {
        // e.g. userModel.create(req.body)
        res.json({
            status: 'entry done!'
        });
    });



app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
    connectDB(process.env.DB_CONNECTION);
});