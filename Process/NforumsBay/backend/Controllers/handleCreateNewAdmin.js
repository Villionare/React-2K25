import AdminModel from "../Models/admin.js"

const handleCreateNewAdmin = async (req, res) => {

    // 1 - check that we have got every required query in the url
    // if (req.body.username && req.body.password) {
    //     console.log(req.body.username);
    // } else {
    //     res.json('fill the details properly');
    // }
    // (req.body.username && req.body.name && req.body.password && req.body.username) ?
    //     null : res.json('fill the details properly');
    // 2 - check if the username, email, or unique property already exists in the db
    // const alreadyExists = AdminModel.findOne();
    // 3 - hash the password and create session or token for the admin 
    // 4 - create the entry and return the status and responce
    //.find() - list all the docs
    //.findOne - find any doc
    //.findOneAndDelete - delete any doc.

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