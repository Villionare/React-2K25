import express from "express";
import handleLoginAdmin from "../Controllers/handleLoginAdmin.js";
import handleCreateNewAdmin from "../Controllers/handleCreateNewAdmin.js";
import handleLogoutAdmin from "../Controllers/handleLogoutAdmin.js";
const adminRoutes = express.Router();

//admin login
adminRoutes.post('/admin_login', handleLoginAdmin);
adminRoutes.post('/admin_signup', handleCreateNewAdmin);
adminRoutes.post('/admin_logout', handleLogoutAdmin);
adminRoutes.get('/dashboard', (req, res) => {
    res.json({ "message": "this is the admin dashboard" })
});

export default adminRoutes;