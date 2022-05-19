import React from 'react'
import Navbar from '../Navbar';

function Contact() {
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
                <h1>Contact Us</h1>
            </div>
        </>
    );
};

export default Contact;