import express from "express";
import handleCreateAnonymous from "../Controllers/handleCreateAnonymous.js";
import anonLogout from "../Controllers/anonLogout.js";
import anonymousCheck from "../Middlewares/anonCheck.js";
const anonymousRouter = express.Router();

anonymousRouter.post("/create", handleCreateAnonymous);
anonymousRouter.post("/anon_logout", anonymousCheck, anonLogout);
// {
//     "success": "Welcome mogga",
//     "session_data": {
//         "type": "anonymous",
//         "username": "mogga",
//         "ip": "::1"
//     }
// }


export default anonymousRouter;
