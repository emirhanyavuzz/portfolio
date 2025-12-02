import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: 'Software Engineer Intern',
            company: 'INNOVA',
            date: 'September 2025 - December 2025',
            description: 'Worked on full-stack development using Java Spring Boot and Vue.js.',
        },
        {
            id: 2,
            title: 'Tech in Banking Intern',
            company: 'QNB Turkiye',
            date: 'Aug 2025 - Aug 2025',
            description: 'Assisted in building the company website from scratch. Gained experience in HTML, CSS, and JavaScript.',
        },
        {
            id: 3,
            title: 'Test Engineer Intern',
            company: 'HAVELSAN',
            date: 'Jan 2025 - April 2025',
            description: 'Collaborated with designers to implement responsive UI components. Used Vue.js and Tailwind CSS.',
        },

        {
            id: 4,
            title: 'Java Developer Intern',
            company: 'AYESAŞ',
            date: 'May 2024 - Aug 2024',
            description: 'Fixed bugs and added small features to existing client projects. Learned about version control with Git.',
        },
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="title">Experience</h2>
                <p className="subtitle">Next one coming soon</p>
                <div className="timeline">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">{exp.date}</span>
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
