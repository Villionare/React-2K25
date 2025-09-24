import mongoose from "mongoose"
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
    const createStatus = await AdminModel.create({
        username: "sbh23ay",
        password: "nu456lla",
    })

    console.log(createStatus);
    res.status(200).send(createStatus);
}


//cookies
//caches
//sessions
//tokens

export default handleCreateNewAdmin