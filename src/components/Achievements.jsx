import React from 'react';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: 'YKS-SAY',
            score: '1180th',
            description: 'University Entrance Exam',
            icon: <img src={`${import.meta.env.BASE_URL}images/sayisal.jpg`} alt="Profile" className="profile-img" />

        },
        {
            id: 2,
            title: 'YKS-SOZ',
            score: '289th',
            description: 'University Entrance Exam',
            icon: <img src={`${import.meta.env.BASE_URL}images/sozel.png`} alt="Profile" className="profile-img" />
        },
        {
            id: 3,
            title: 'TOEIC',
            score: '815',
            description: 'Foreign Language Exam (English)',
            icon: <img src={`${import.meta.env.BASE_URL}images/dil.png`} alt="Profile" className="profile-img" />
        },
        {
            id: 4,
            title: 'ALES-SAY',
            score: '94',
            description: 'Academic Personnel and Graduate Education Entrance Exam',
            icon: <img src={`${import.meta.env.BASE_URL}images/sayisal.png`} alt="Profile" className="profile-img" />
        },
        {
            id: 5,
            title: 'Bachelor\'s Degree',
            score: '3.02 GPA',
            description: 'Computer Engineering',
            icon: <img src={`${import.meta.env.BASE_URL}images/tobb_logo.png`} alt="Profile" className="profile-img" />
        }
    ];

    return (
        <section id="achievements" className="section achievements-section">
            <div className="container">
                <h2 className="title">Achievements</h2>
                <p className="subtitle">Exam Scores & Education</p>
                <div className="achievements-grid">
                    {achievements.map((item) => (
                        <div key={item.id} className="achievement-card">
                            <div className="achievement-icon">{item.icon}</div>
                            <div className="achievement-content">
                                <h3>{item.title}</h3>
                                <div className="achievement-score">{item.score}</div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
