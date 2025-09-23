import express from "express";
import handleLoginAdmin from "../Controllers/handleLoginAdmin.js";
import handleCreateNewAdmin from "../Controllers/handleCreateNewAdmin.js";
const adminRoutes = express.Router();

//admin login
adminRoutes.post('/admin_login', handleLoginAdmin);
adminRoutes.post('/admin_signup', handleCreateNewAdmin);

export default adminRoutes;