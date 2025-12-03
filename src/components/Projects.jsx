import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Mini Game Library',
            description: 'A game library with many handcrafted mini games',
            image: 'https://via.placeholder.com/300x200',
            link: 'https://github.com/emirhanyavuzz/Mini-Game-Library',
        },
        {
            id: 2,
            title: 'Automation Project for Instagram',
            description: 'Automatic reels creator using AI pipeline',
            image: 'https://private-user-images.githubusercontent.com/120987105/522016459-dbf9b241-d9b9-40ef-a381-e5d9df7ee66b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ3ODM5MTAsIm5iZiI6MTc2NDc4MzYxMCwicGF0aCI6Ii8xMjA5ODcxMDUvNTIyMDE2NDU5LWRiZjliMjQxLWQ5YjktNDBlZi1hMzgxLWU1ZDlkZjdlZTY2Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIwM1QxNzQwMTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MzkxMTNjMDEyYjE4NzAyY2E5ODRiMTIxODlhZGRjYzlhY2VjNmEzYjU2ZDA1NjE5ZTc0N2FhMzJlMzgwYmQ1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.03FETRvNprHlgsjbQ_l-49QsAYwkuNUYcYhJHx0xS7Y',
            link: 'https://github.com/emirhanyavuzz/Reels-Creator',
        },
        {
            id: 3,
            title: 'ADSB Project for Aircrafts',
            description: 'An aircraft tracking system that designed on the map by pulling the location data of the aircraft from the API.',
            image: 'https://private-user-images.githubusercontent.com/120987105/521862846-5f25d1af-a160-47b5-a109-38bffce5df3e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ3ODM2NzEsIm5iZiI6MTc2NDc4MzM3MSwicGF0aCI6Ii8xMjA5ODcxMDUvNTIxODYyODQ2LTVmMjVkMWFmLWExNjAtNDdiNS1hMTA5LTM4YmZmY2U1ZGYzZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIwM1QxNzM2MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYTFlNjMwZThmZmQ1ZGIwODVmYTViYzUwYmNmZThlZWEwZThiZjIxZGRkZDVmZGMyNzRmMTNmNDQwZWI5MDAyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.5DzXHUubSfUwzyLpF7rgjmZWscjjdLVlozNbNNThQpE',
            link: 'https://github.com/emirhanyavuzz/ADSB_project',
        },
        {
            id: 4,
            title: 'Supply-Demand Simulation',
            description: 'A supply-demand simulation project',
            image: 'https://private-user-images.githubusercontent.com/120987105/522016459-dbf9b241-d9b9-40ef-a381-e5d9df7ee66b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ3ODM5MTAsIm5iZiI6MTc2NDc4MzYxMCwicGF0aCI6Ii8xMjA5ODcxMDUvNTIyMDE2NDU5LWRiZjliMjQxLWQ5YjktNDBlZi1hMzgxLWU1ZDlkZjdlZTY2Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIwM1QxNzM2MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MzkxMTNjMDEyYjE4NzAyY2E5ODRiMTIxODlhZGRjYzlhY2VjNmEzYjU2ZDA1NjE5ZTc0N2FhMzJlMzgwYmQ1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.03FETRvNprHlgsjbQ_l-49QsAYwkuNUYcYhJHx0xS7Y',
            link: 'https://github.com/emirhanyavuzz/',
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
