import express from "express";
import handleCreateAnonymous from "../Controllers/handleCreateAnonymous.js";
const anonymousRouter = express.Router();

anonymousRouter.post("/create", handleCreateAnonymous);
// adminRoutes.post('/anon_logout');
// {
//     "success": "Welcome mogga",
//     "session_data": {
//         "role": "anonymous",
//         "username": "mogga",
//         "ip": "::1"
//     }
// }


export default anonymousRouter;
