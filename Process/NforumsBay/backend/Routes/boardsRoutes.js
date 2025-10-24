import express from "express";
import handleListBoards from "../Controllers/boards/handleListBoards.js";
import handlCreateBoard from "../Controllers/boards/handlCreateBoard.js";
import adminCheck from "../Middlewares/adminCheck.js";
import handleDeleteBoard from "../Controllers/boards/handleDeleteBoard.js";
import handleUpdateBoard from "../Controllers/boards/handleUpdateBoard.js";
import handleCreateBoardCategory from "../Controllers/boards/handleCreateBoardCategory.js";
const boardsRoutes = express.Router();

//boards
boardsRoutes.post('/create_category', adminCheck, handleCreateBoardCategory);
boardsRoutes.post('/create', adminCheck, handlCreateBoard);
boardsRoutes.delete('/delete', adminCheck, handleDeleteBoard);
boardsRoutes.patch('/update', adminCheck, handleUpdateBoard);
boardsRoutes.get('/', handleListBoards); //listing all the boards

export default boardsRoutes;

//handlDeleteBoard