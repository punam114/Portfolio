import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Simulate sending message
    alert(`Thank you ${formData.name}! Your message has been received. I'll get back to you at ${formData.email} soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2>Portfolio</h2>
          <div className="nav-menu">
            <button onClick={() => scrollTo('profile')}>Profile</button>
            <button onClick={() => scrollTo('projects')}>Projects</button>
            <button onClick={() => scrollTo('skills')}>Skills</button>
            <button onClick={() => scrollTo('resume')}>Resume</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
            <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <section id="profile" className="section profile-section">
        <div className="container">
          <div className="profile-content">
            <div className="profile-image">
              <div className="image-placeholder">
                <img src="https://i.ibb.co/fGM50tMw/Frame-1.jpg" alt="Frame-1" border="0" />
              </div>
            </div>
            <div className="profile-text">
              <h1 className="fade-in">Punam Kumari</h1>
              <h3 className="fade-in-delay">Software Developer</h3>
              <p className="fade-in-delay-2">I am passionate about software development, especially in front-end technologies. I have worked with HTML, CSS, JavaScript, React, and I have also explored back-end tools like Node.js, Express, and MongoDB. Along with this, I enjoy solving problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card slide-up" onClick={() => window.open('https://home-improvement-tracker.netlify.app/', '_blank')} style={{cursor: 'pointer'}}>
              <div className="project-image home-icon"></div>
              <h3>Home Improvement Tracker</h3>
              <p>Track and manage home renovation projects with budget monitoring and progress tracking</p>
              <div className="tech-stack">HTML5 • CSS3 • JavaScript</div>
            </div>

            <div className="project-card slide-up-delay" onClick={() => window.open('https://recipe-app-sigma-sooty.vercel.app/', '_blank')} style={{cursor: 'pointer'}}>
              <div className="project-image recipe-icon"></div>
              <h3>Recipe App</h3>
              <p>Discover, save, and share your favorite recipes with ingredient lists and cooking instructions</p>
              <div className="tech-stack">HTML5 • CSS3 • React • Firebase • Tailwind CSS</div>
            </div>

            <div className="project-card slide-up-delay-2" onClick={() => window.open('https://6658b5dc043c344859049415--inquisitive-daffodil-b3afeb.netlify.app/', '_blank')} style={{cursor: 'pointer'}}>
              <div className="project-image glasses-icon"></div>
              <h3>Lenskart Clone</h3>
              <p>E-commerce eyewear website clone with product catalog, cart functionality, and user authentication</p>
              <div className="tech-stack">HTML5 • CSS3</div>
            </div>

            <div className="project-card slide-up" onClick={() => window.open('https://project-1-mu-three.vercel.app/', '_blank')} style={{cursor: 'pointer'}}>
              <div className="project-image laptop-icon"></div>
              <h3>Dell Clone</h3>
              <p>Responsive computer hardware website clone featuring product showcase and modern UI design</p>
              <div className="tech-stack">HTML5 • CSS3 • JavaScript • React • Tailwind CSS</div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <div className="skill-list">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Tailwind</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <div className="skill-list">
                <span className="skill-tag">Adaptability</span>
                <span className="skill-tag">Teamwork</span>
                <span className="skill-tag">Time Management</span>
                <span className="skill-tag">Effective Communication</span>
                <span className="skill-tag">Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="section resume-section">
        <div className="container">
          <h2 className="section-title">Resume</h2>
          <div className="resume-content">

            <div className="resume-section">
              <h3>Education</h3>
              <div className="resume-item">
                <h4>Masters In Computer Application</h4>
                <p className="company">YBN University • 2023 - 2025</p>
                <p>Graduated with honors, specialized in web development and software engineering</p>
              </div>
            </div>
            <div className="download-resume">
              <button className="btn-primary" onClick={() => window.open('https://drive.google.com/file/d/1RcFLWQz6FK2_t2QZmHA2eCkbw-VCQ5Ty/view?usp=sharing', '_blank')}>See Resume</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm always interested in new opportunities and exciting projects.</p>
              <div className="contact-details">
                <p>📧 punamprajapati1012@gmail.com</p>
                <p>📱 +91 9117995307</p>
                <p>📍 Bokaro, Jharkhand</p>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;