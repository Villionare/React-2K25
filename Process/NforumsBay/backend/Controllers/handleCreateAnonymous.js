import anonymousModel from "../Models/anonymous.js";
import expressSession from "express-session";


// for anonymous session management
// const anonymousSession = expressSession({
//     name: "anonymous.sid",
//     secret: "anonymousOne",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24, // 24 hours
//         httpOnly: true,
//         secure: false,  // set true in production
//         sameSite: "lax",
//     },
// });


const handleCreateAnonymous = async (req, res) => {
    try {
        const { username } = req.body;

        // console.log(username);

        // validation
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

        // ✅ session only after DB success
        // anonymousSession(req, res, () => {
        // req.session.user = {
        //     id: newAnonymous._id.toString(),
        //     username: newAnonymous.username,
        //     role: "anonymous",
        // };


        // console.log();

        // ✅ response INSIDE callback (so cookie is set)
        res.status(200).json({
            success: `Welcome ${newAnonymous.username}`,
            forward: true,
        });
        // });
    } catch (error) {
        console.error(error);
        next(error);
    }
}

export default handleCreateAnonymous;