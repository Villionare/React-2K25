import express from "express";
import handleCreateAnonymous from "../Controllers/handleCreateAnonymous.js";
const anonymousRouter = express.Router();

anonymousRouter.post("/create", handleCreateAnonymous);
// {
//     "success": "Welcome mogga",
//     "session_data": {
//         "role": "anonymous",
//         "username": "mogga",
//         "ip": "::1"
//     }
// }


export default anonymousRouter;
