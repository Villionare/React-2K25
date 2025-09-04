import bcrypt from 'bcryptjs';
import userModel from '../models/user.js';

async function loginUser(req, res) {
    const { userOrEmail, password } = req.body || {};

    if (!userOrEmail || !password) {
        return res.status(400).json({ success: false, message: 'Fill the credentials' });
    }

    try {

        const user = await userModel.findOne({ $or: [{ username: userOrEmail }, { email: userOrEmail }] });

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        return res.status(200).json({
            "success": "true",
            "message": 'Signin successful',
            "user": { id: user._id, username: user.username, email: user.email }
        });
    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
}

export default loginUser;