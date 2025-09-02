import bcrypt from 'bcryptjs';
import userModel from '../models/user.js';

async function signUpUser(req, res) {
    try {
        const { fullname, username, email, password } = req.body || {};

        if (!fullname || !username || !email || !password) {
            return res.status(400).json({ message: 'fullname, username, email and password are required' });
        }

        const existing = await userModel.findOne({ $or: [{ username }, { email }] });
        if (existing) {
            return res.status(409).json({ message: 'username or email already in use' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

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
}

export default signUpUser;