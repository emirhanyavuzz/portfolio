import React, { useRef } from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Mini Game Library',
            description: 'A game library with many handcrafted mini games',
            image: 'images/miniGamesMenu.png',
            link: 'https://github.com/emirhanyavuzz/Mini-Game-Library',
        },
        {
            id: 2,
            title: 'Automation Project for Instagram',
            description: 'Automatic reels creator using AI pipeline',
            image: 'images/reels_template.png',
            link: 'https://github.com/emirhanyavuzz/Reels-Creator',
        },
        {
            id: 3,
            title: 'ADSB Project for Aircrafts',
            description: 'An aircraft tracking system that designed on the map by pulling the location data of the aircraft from the API.',
            image: 'images/adsb_ss.png',
            link: 'https://github.com/emirhanyavuzz/ADSB_project',
        },
        {
            id: 4,
            title: 'Supply-Demand Simulation',
            description: 'A supply-demand simulation project',
            image: 'images/supply_demand_ss.png',
            link: 'https://github.com/emirhanyavuzz/Supply-Demand-Simulation',
        },
        {
            id: 5,
            title: 'Village Game',
            description: 'Players can manage their villagers, and control resources.',
            image: 'images/village_game_ss.png',
            link: 'https://github.com/emirhanyavuzz/Village-Game',
        },
        {
            id: 6,
            title: 'Fund Data Simulation',
            description: 'Using a lognormal distribution model based on real statistics, synthetic data was generated for more than 5.6 million investors.',
            image: 'images/fund_data_ss.png',
            link: 'https://github.com/emirhanyavuzz/Fund-Data-Simulation',
        },
        {
            id: 7,
            title: 'Military Operations Simulator',
            description: 'Centralized Military Units Command and Control Simulation',
            image: 'images/military_operation_sim_ss.png',
            link: 'https://github.com/emirhanyavuzz/Harekat-Simulator-Project',
        },
    ];

    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            const { scrollLeft: currentScroll, scrollWidth, clientWidth } = carouselRef.current;
            // If at the beginning, jump to the end
            if (currentScroll <= 10) {
                carouselRef.current.scrollTo({ left: scrollWidth - clientWidth, behavior: 'smooth' });
            } else {
                carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
            }
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const { scrollLeft: currentScroll, scrollWidth, clientWidth } = carouselRef.current;
            // If at the end, jump to the beginning
            if (currentScroll >= scrollWidth - clientWidth - 5) {
                carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="title">My Projects</h2>
                <p className="subtitle">Some of my recent work</p>
                <div className="projects-carousel-wrapper">
                    <button
                        className="carousel-arrow carousel-arrow-left"
                        onClick={scrollLeft}
                        aria-label="Previous projects"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                        </svg>
                    </button>
                    <div className="projects-carousel" ref={carouselRef}>
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
                    <button
                        className="carousel-arrow carousel-arrow-right"
                        onClick={scrollRight}
                        aria-label="Next projects"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
