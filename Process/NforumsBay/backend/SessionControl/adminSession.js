import session from "express-session";
import dotenv from "dotenv";
dotenv.config();

const sessionForBothUsers = session({
    name: "user.sid",
    secret: process.env.SESSION_SECURITY_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: false, // Set to true in production with HTTPS
        httpOnly: true, // Prevents client-side JS access for security
        sameSite: 'lax', // Protects against CSRF
    }
});

export default sessionForBothUsers;