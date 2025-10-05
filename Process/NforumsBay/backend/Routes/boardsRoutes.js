import express from "express";
import handleListBoards from "../Controllers/handleListBoards.js";
import handleCheckAdmin from "../Middlewares/handleCheckAdmin.js";
import handlCreateBoard from "../Controllers/handlCreateBoard.js";
const boardsRoutes = express.Router();

//boards
boardsRoutes.get('/', handleListBoards); //listing all the boards
boardsRoutes.post('/', handleCheckAdmin, handlCreateBoard); //creating a board
boardsRoutes.post('/', handleCheckAdmin); //deleting a board

export default boardsRoutes;

//handlDeleteBoard