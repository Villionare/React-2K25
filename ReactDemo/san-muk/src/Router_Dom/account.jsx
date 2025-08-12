// Account.js
import React from "react";
import { useLocation } from "react-router-dom";
function Account() {
    const location = useLocation();
    console.log(location);
    return (
        <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
            <h2>Your Account</h2>
            <p>Manage your profile, settings, and preferences here.</p>
        </div>
    );
}

export default Account;
