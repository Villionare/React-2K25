const handleLogoutAdmin = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Session destroy error:', err);
            return res.status(500).json({
                message: 'Logout failed',
                success: false
            });
        }

        // Clear cookie on client
        res.clearCookie('user.sid');
        res.json({
            message: 'Logged out successfully ',
            success: true
        });

    });

}

export default handleLogoutAdmin;