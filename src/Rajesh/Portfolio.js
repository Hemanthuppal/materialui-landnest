import React from 'react';
import './Portfolio.css';

import living1 from '../Images/modernlivingroom.webp';
import bedroom1 from '../Images/bedroom.webp';
import dining1 from '../Images/dinningarea.webp';
import study1 from '../Images/studyroom.webp';

function Portfolio() {
  const projects = [
    { id: 1, title: 'Modern Living Room', img: living1 },
    { id: 2, title: 'Minimalist Bedroom', img: bedroom1 },
    { id: 3, title: 'Cozy Dining Area', img: dining1 },
    { id: 4, title: 'Boho Study Room', img: study1 },
  ];

  const testimonials = [
    { id: 1, name: 'Priya Sharma', text: "My living room looks stunning now! Truly professional and creative." },
    { id: 2, name: 'Anil Mehta', text: "Great attention to detail. Loved the bedroom design!" }
  ];

  return (

    
    <div className="portfolio">
      <section className="hero">
        <h1>Interior Design Portfolio</h1>
        <p>Transforming homes into elegant, functional spaces that inspire comfort and creativity.</p>
      </section>

      <section className="section">
        <h2>Our Work</h2>
        <div className="grid">
          {projects.map(project => (
            <div className="card" key={project.id}>
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section about">
        <h2>About the Designer</h2>
        <p>
          With over 10 years of experience in interior design, I specialize in crafting personalized home spaces
          that reflect each client's taste and lifestyle. From modern minimalism to timeless classics, I bring visions to life.
        </p>
      </section>

      <section className="section testimonial">
        <h2>Client Testimonials</h2>
        <div className="grid">
          {testimonials.map(t => (
            <div className="card" key={t.id}>
              <p>"{t.text}"</p>
              <p><strong>- {t.name}</strong></p>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact">
        <h2>Contact</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Portfolio;
