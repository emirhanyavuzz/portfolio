import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="title">Get In Touch</h2>
                <p className="subtitle">I'd love to hear from you!</p>
                <div className="contact-content">
                    <div className="contact-card">
                        <h3>Let's Chat</h3>
                        <p>
                            Whether you have a question or just want to say hi, feel free to drop me a mail.
                        </p>
                        <a href="mailto:yavuz.emirhan@outlook.com" className="contact-button">
                            Say Hello
                        </a>
                        <div className="social-links">
                            {/* Add social icons here if needed */}
                            <a href="https://www.linkedin.com/in/emirhan-yavuz-ba8821222">LinkedIn</a>
                            <a href="https://github.com/emirhanyavuzz">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Emirhan Yavuz</p>
            </footer>
        </section>
    );
};

export default Contact;
