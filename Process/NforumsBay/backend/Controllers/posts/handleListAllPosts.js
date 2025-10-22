import postsModel from '../../Models/posts.js';

const handleListAllPosts = async (req, res) => {
    try {
        // Implementation needed
        res.send("showing all the posts");
    } catch (error) {
        res.status(500).json({ message: "Error listing posts", error: error.message });
    }
}

export default handleListAllPosts;