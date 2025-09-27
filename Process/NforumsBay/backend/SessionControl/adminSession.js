import session from "express-session";

const adminSession = session({
    name: "admin.sid",
    secret: "admin-secret",
    cookie: { maxAge: 3600000 }
});

export default adminSession;
