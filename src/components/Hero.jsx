import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="greeting">Hello there! 👋</span>
                    <h1 className="hero-title">I'm <span className="highlight">Emirhan</span></h1>
                    <p className="hero-subtitle">
                        A passionate developer creating strong and reliable digital products.
                    </p>
                    <button className="cta-button" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                        See My Work
                    </button>
                </div>
                <div className="hero-image">
                    <div className="blob"></div>
                    {/* Placeholder for user image */}
                    <img src="/images/profile_photo.png" alt="Profile" className="profile-img" />
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1668170000">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
