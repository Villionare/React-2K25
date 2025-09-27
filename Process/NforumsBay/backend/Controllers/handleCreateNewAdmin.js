import AdminModel from "../Models/admin.js"
import expressSession from "express-session";

//for admin session management
// const adminSession = expressSession({
//     name: "admin.sid",
//     secret: "baySecret", //creates a hash of the session id to be used in the cookie
//     resave: false, //if the value is unchanged so the server won't save again (cause load)
//     saveUninitialized: false, //agar koi uninitialised data aa raha hai to use save mat karo server pe (cause load)
//     cookie: {
//         maxAge: 1000 * 60 * 30,  // 30 minutes
//         httpOnly: true,           // prevents client-side JS from accessing cookie
//         secure: false,            // set to true in production (HTTPS only)
//         sameSite: 'lax'           // adjust as needed; for cross-site requests you may need 'none' + secure:true
//     }
// });


const handleCreateNewAdmin = async (req, res) => {

    try {
        const { signUpName, signUpAge, signUpUsername, signUpEmail, signUptypePassword } = req.body || {};

        // 1 - check that we have got every required query in the url
        if (!signUpName || !signUpAge || !signUpUsername || !signUpEmail || !signUptypePassword) {
            return res.status(400).json({ message: 'server: fill the required fealds properly' });
        }

        // 2 - check if the username, email, or unique property already exists in the db
        const existingEmail = await AdminModel.findOne({ email: signUpEmail });
        if (existingEmail) {
            return res.status(409).json({ message: "Email id already in use by another admin" });
        }

        const existingUsername = await AdminModel.findOne({ username: signUpUsername });
        if (existingUsername) {
            return res.status(409).json({ message: "Username already in use, find another unique one" });
        }

        const newUser = await AdminModel.create({
            name: signUpName,
            username: signUpUsername,
            age: signUpAge,
            email: signUpEmail,
            password: signUptypePassword
        });

        const { password, ...userWithoutPassword } = newUser.toObject();

        //now that everything is okay we will create a session for the admin
        // adminSession(req, res, () => {
        //     req.session.user = {
        //         id: user._id.toString(),
        //         username: user.username,
        //         role: 'admin'
        //     }
        // });

        console.log(newUser);
        res.status(200).json({ "success": userWithoutPassword });

    } catch (e) {
        console.error(e);
    }
}


//cookies
//caches
//sessions
//tokens

export default handleCreateNewAdmin