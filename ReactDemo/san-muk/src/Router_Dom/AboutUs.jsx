import { Outlet } from "react-router-dom";

function About() {
    return (
        <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
            <h2>About Us</h2>
            <p>We are passionate about building awesome React apps.</p>
            <Outlet />
        </div>
    );
}

export default About;
