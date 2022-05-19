import React from "react";
import Navbar from "../Navbar";

function About() {
    return (
        <>
            <Navbar />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <h1>About Us</h1>
            </div>
        </>
    );
};

export default About;