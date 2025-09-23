import express from "express";
const adminRoutes = express.Router();

//admin login
adminRoutes.post('/api/admin_login');
adminRoutes.post('/api/admin_signup');

export default adminRoutes;