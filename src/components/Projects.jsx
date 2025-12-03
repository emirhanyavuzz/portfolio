import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Mini Game Library',
            description: 'A game library with many handcrafted mini games',
            image: 'https://via.placeholder.com/300x200',
            link: 'https://github.com/emirhanyavuzz/',
        },
        {
            id: 2,
            title: 'Automation Project for Instagram',
            description: 'Automatic reels creator using AI pipeline',
            image: 'https://via.placeholder.com/300x200',
            link: 'https://github.com/emirhanyavuzz/',
        },
        {
            id: 3,
            title: 'ADSB Project for Aircrafts',
            description: 'An aircraft tracking system that designed on the map by pulling the location data of the aircraft from the API.',
            image: 'https://via.placeholder.com/300x200',
            link: 'https://github.com/emirhanyavuzz/ADSB_project',
        },
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="title">My Projects</h2>
                <p className="subtitle">Some of my recent work</p>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} className="project-link">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
