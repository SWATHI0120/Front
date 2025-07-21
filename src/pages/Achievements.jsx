import React from "react";
import "../styles/Achievements.css"; // Make sure the path is correct

const achievements = [
  {
    name: "Hackathon 2024",
    rank: "Second Place",
    year: "2024",
    certificateUrl: "https://example.com/hackathon-certificate.pdf",
  },
  {
    name: "CodeFest Challenge",
    rank: "Third Place",
    year: "2023",
    certificateUrl: "https://example.com/codefest-certificate.pdf",
  },
  {
    name: "Frontend Mastery",
    rank: "Certified",
    year: "2025",
    certificateUrl: "https://example.com/frontend-certificate.pdf",
  },
   {
    name: "Frontend Mastery",
    rank: "Certified",
    year: "2025",
    certificateUrl: "https://example.com/frontend-certificate.pdf",
  },
   {
    name: "Frontend Mastery",
    rank: "Certified",
    year: "2025",
    certificateUrl: "https://example.com/frontend-certificate.pdf",
  },
   {
    name: "Frontend Mastery",
    rank: "Certified",
    year: "2025",
    certificateUrl: "https://example.com/frontend-certificate.pdf",
  },
   {
    name: "Frontend Mastery",
    rank: "Certified",
    year: "2025",
    certificateUrl: "https://example.com/frontend-certificate.pdf",
  },
   {
    name: "Frontend Mastery",
    rank: "Certified",
    year: "2025",
    certificateUrl: "https://example.com/frontend-certificate.pdf",
  },
   {
    name: "Frontend Mastery",
    rank: "Certified",
    year: "2025",
    certificateUrl: "https://example.com/frontend-certificate.pdf",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2 className="achievements-title">Achievements & Certifications</h2>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            <h3 className="achievement-name">{item.name}</h3>
            <p className="achievement-rank">{item.rank}</p>
            <p className="achievement-year">{item.year}</p>
            <a
              href={item.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="view-certificate-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
