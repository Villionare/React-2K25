import anonymousModel from "../Models/users/anonymous.js";

const handleCreateAnonymous = async (req, res) => {
    try {
        const { username } = req.body;

        if (!username) {
            return res.status(400).json({ message: "Fill your credentials properly" });
        }

        // check existing
        const existingUsername = await anonymousModel.findOne({ username });
        if (existingUsername) {
            return res.status(409).json({
                message: "Username already in use",
                forward: false,
            });
        }

        // create DB entry
        const newAnonymous = await anonymousModel.create({
            ip: req.ip,
            username,
        });

        // create session for the anonymous user AFTER DB success
        req.session.user = {
            type: 'anonymous',
            username: newAnonymous.username,
            ip: req.ip,
        };
        req.session.cookie.maxAge = 24 * 60 * 60 * 1000; // 24 hours in ms

        // save session before sending response so Set-Cookie is sent
        req.session.save(err => {
            if (err) {
                console.error('Failed to save session for anonymous:', err);
                return res.status(500).json({ message: 'Failed to create session' });
            }

            // response INSIDE callback (so cookie is set)
            return res.status(200).json({
                message: `Welcome ${newAnonymous.username}`,
                success: true,
                session_data: req.session.user,
            });
        });

    } catch (error) {
        console.error(e);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default handleCreateAnonymous;