//whenever there is a page for admins only use this middleware

const adminCheck = (req, res, next) => {
    if (!req.session.user || req.session.user.role !== "admin") {
        return res.status(403).json({
            message: "You are not authorized to access this page"
        });
    }

    // User is admin → allow access to next route handler
    console.log('admin middleware check passed');
    next();
};

export default adminCheck;