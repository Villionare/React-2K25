import session from "express-session";

const userSession = session({
    name: "user.sid",
    secret: "user-secret",
    cookie: { maxAge: 86400000 }
});

export default userSession;
