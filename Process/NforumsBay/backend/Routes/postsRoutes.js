import express from "express";
import allowAnonymousOrAdmin from "../Middlewares/eitherAnonORAdmin.js";
import op_postModel from "../Models/content/op_posts.js";

const postsRouter = express.Router({ mergeParams: true });

postsRouter.get('/', allowAnonymousOrAdmin, async (req, res) => {
    try {
        const { op } = req.query;

        if (!op) {
            return res.status(400).json({
                message: "Missing required fields ⚠️"
            });
        }

        const checkPost = await op_postModel.findById(op);

        if (!checkPost) {
            return res.status(404).json({
                message: "No post exists with this op id ❌"
            });
        }

        // Later you can fetch replies like:
        // const replies = await repliesModel.find({ _id: { $in: op_replies } });

        return res.status(200).json({
            post: checkPost,
        });

    } catch (error) {
        console.error("Error fetching post:", error);
        return res.status(500).json({
            message: "Internal server error 💥",
            error: error.message
        });
    }
});

//fetching replies.
postsRouter.get('/replies', allowAnonymousOrAdmin, async (req, res) => {

    //for now we will get the _id of the op doc. and then we will search for replies in it.
    const { _id } = req.query;

    if (!_id) {
        res.status(400).json({
            message: "messing required fealds"
        })
    }

    const checkOP = await op_postModel.findById({ _id }).populate('replies');

    const repliesArray = checkOP.replies;

    if (!checkOP) {
        res.status(400).send({
            message: "op does not exists"
        })
    }

    res.status(200).json({
        repliesArray
    })
})

export default postsRouter;
