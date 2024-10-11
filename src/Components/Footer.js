import React from 'react';
import './Styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <h1 className="footer-title">Nexus</h1>
                <div className="footer-links">
                    <p className="footer-link">About</p>
                    <p href="#" className="footer-link">Contact</p>
                    <p href="#" className="footer-link">Privacy Policy</p>
                </div>
                <div className="footer-copyright" style={{color: 'white'}}>
                    <p>&copy; {new Date().getFullYear()} Nexus. All rights reserved.</p>
                </div>
            </div>
        </div>
    )

} 

export default Footer;

