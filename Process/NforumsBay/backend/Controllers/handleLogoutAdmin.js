const handleLogoutAdmin = (req, res) => {

    const adminUsername = req.session.user.username;
    req.session.destroy(err => {
        if (err) {
            console.error('Session destroy error:', err);
            return res.status(500).json({
                message: 'Logout failed',
                success: false
            });
        }

        res.clearCookie('user.sid');
        res.status(200).json({
            message: 'Logged out successfully',
            success: true,
            logouted: true
        });


    });

}

export default handleLogoutAdmin;