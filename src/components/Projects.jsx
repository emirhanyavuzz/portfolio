import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'A lovely project that does amazing things.',
            image: 'https://via.placeholder.com/300x200',
            link: '#',
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'Another sweet application built with love.',
            image: 'https://via.placeholder.com/300x200',
            link: '#',
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'Creative and colorful design experiment.',
            image: 'https://via.placeholder.com/300x200',
            link: '#',
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
