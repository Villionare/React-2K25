const handleCheckAdmin = (req, res, next) => {
    res.send("just to check if the user is admin or not");
    next();
}

export default handleCheckAdmin