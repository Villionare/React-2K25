const handleLogoutAdmin = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Session destroy error:', err);
            return res.status(500).send('Logout failed');
        }

        // Clear cookie on client
        res.clearCookie('connect.sid');
        res.send('Logged out successfully ');

    });

}

export default handleLogoutAdmin;