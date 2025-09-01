import express from "express"
import connectDB from './controllers/MongoConnect.js';
import dotenv from "dotenv"
import cors from 'cors'
import userModel from "./models/user.js";
import bcrypt from 'bcryptjs';
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
    .get((req, res) => {
        console.log('data submitted');

        res.json({
            response: 'signup data submitted'
        });

        console.log({
            response: `a new signup ${Date.now()}`
        });
    })
    .post(async (req, res) => {
        try {
            const { fullname, username, email, password } = req.body || {};

            // basic validation
            if (!fullname || !username || !email || !password) {
                return res.status(400).json({ message: 'fullname, username, email and password are required' });
            }

            // check for existing user by username or email
            const existing = await userModel.findOne({ $or: [{ username }, { email }] });
            if (existing) {
                return res.status(409).json({ message: 'username or email already in use' });
            }

            // hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // create user (map fullname -> name as schema expects)
            const created = await userModel.create({
                username,
                name: fullname,
                email,
                password: hashedPassword,
            });

            return res.status(201).json({
                message: 'User created',
                user: { id: created._id, username: created.username, email: created.email }
            });
        } catch (err) {
            console.error('Signup error', err);
            if (err.code === 11000) {
                return res.status(409).json({ message: 'duplicate key', detail: err.keyValue });
            }
            return res.status(500).json({ message: 'internal server error' });
        }
    });

app.route('/api/auth/signin')
    .get((req, res) => {

        res.json({
            response: 'signin data submitted',
            recieved_data: req.body
        });

        console.log({
            response: `a new signup ${Date.now()}`
        });
    })
    .post((req, res) => {

        const { userOrEmail, password } = req.body || {};
        console.log("Received:", userOrEmail, password);

        return res.status(200).json({
            message: 'Signin successfull',
            recieved_data: {
                userOrEmail,
                password
            }
        });

    });



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
    connectDB(process.env.DB_CONNECTION);
});