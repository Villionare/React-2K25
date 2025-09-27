import AdminModel from "../Models/admin.js";

const handleLoginAdmin = async (req, res) => {

    const { loginIdentifier, loginPassword } = req.body || {};

    try {

        //check if all the data is here
        if (!loginIdentifier || !loginPassword) {
            return res.status(400).json({ message: "server: Fill the fealds properly" });
        }

        // Find user by either username or email
        const user = await AdminModel.findOne({
            $or: [{ username: loginIdentifier }, { email: loginIdentifier }]
        });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        // Check password
        if (user.password !== loginPassword) {
            return res.status(401).json({ message: "Incorrect password" });
        }
        console.log(user);

        const { password, ...restWithoutPassword } = user.toObject();


        //now that everything is okay we will create a session for the user
        req.session.user = {
            type: 'admin',
            username: loginIdentifier,
            ip: req.ip
        };

        req.session.cookie.maxAge = 60 * 60 * 1000; //saving the max time for admin session

        // Ensure session is saved before sending response so the Set-Cookie header is sent
        req.session.save(err => {
            if (err) {
                console.error('Session save error:', err);
                return res.status(500).json({ message: 'Failed to save session' });
            }

            console.log('Session saved:', req.session);
            console.log('Signin Session saved:', req.session);
            return res.status(201).json({
                "message": restWithoutPassword,
                forward: true,
            });
        });

    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default handleLoginAdmin;