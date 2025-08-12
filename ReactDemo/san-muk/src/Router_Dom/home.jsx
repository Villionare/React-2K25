import React from "react";
import { useLocation } from "react-router-dom";

function Home() {
    const location = useLocation();
    console.log(location);
    return (
        <div style={{
            textAlign: "center",
            padding: "50px",
            fontFamily: "Arial, sans-serif"
        }}>
            <h1>Welcome to My Home Page</h1>
            <p>This is a simple React component using JSX.</p>
            <button
                onClick={() => alert("Hello from React!")}
                style={{ padding: "10px 20px", fontSize: "16px" }}
            >
                Click Me
            </button>
        </div>
    );
}

export default Home;
