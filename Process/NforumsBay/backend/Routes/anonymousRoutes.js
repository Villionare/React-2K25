import express from "express";
import handleCreateAnonymous from "../Controllers/handleCreateAnonymous.js";
const anonymousRouter = express.Router();

anonymousRouter.post("/create", handleCreateAnonymous);

export default anonymousRouter;
