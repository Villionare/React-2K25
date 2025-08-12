// Services.js
import React from "react";
import { useLocation } from "react-router-dom";

function Services() {
    const location = useLocation();
    console.log(location);
    return (
        <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
            <h2>Our Services</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>UI/UX Design</li>
            </ul>
        </div>
    );
}

export default Services;
