import express from "express";
import handleListBoards from "../Controllers/handleListBoards.js";
import handlCreateBoard from "../Controllers/handlCreateBoard.js";
import adminCheck from "../Middlewares/adminCheck.js";
const boardsRoutes = express.Router();

//boards
boardsRoutes.get('/', handleListBoards); //listing all the boards
boardsRoutes.post('/', adminCheck, handlCreateBoard); //creating a board
boardsRoutes.post('/', adminCheck); //deleting a board

export default boardsRoutes;

//handlDeleteBoard