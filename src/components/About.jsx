import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="title">About Me</h2>
                <p className="subtitle">Get to know me better</p>
                <div className="about-content">
                    <div className="about-card">
                        <p>
                            I am a creative developer who loves building beautiful and functional websites.
                            I specialize in React and modern CSS, and I'm always learning new things.
                            When I'm not coding, you can find me exploring new coffee shops or reading a good book.
                        </p>
                        <p>
                            My goal is to create digital experiences that bring joy to users. I believe in
                            clean code, accessible design, and a touch of whimsy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
