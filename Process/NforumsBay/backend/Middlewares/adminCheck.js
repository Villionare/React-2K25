const adminCheck = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.json({ message: 'access available to admins, please login to continue' })
    }
}

export default adminCheck