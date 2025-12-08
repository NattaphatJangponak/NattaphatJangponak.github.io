import { Link } from 'react-router-dom'
import '../pages/Page.css'

const Home = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="home-welcome">
          <div className="profile-picture-wrapper">
            <div className="hexagon">
              <img src="https://via.placeholder.com/200x200?text=Profile" alt="Profile" />
            </div>
          </div>
          <h1>Welcome to My Resume</h1>
          <p className="welcome-text">Nattaphat Jangponak</p>
          
          <div className="quick-links">
            <Link to="/personal-summary" className="quick-link-card">
              <span className="quick-link-icon">👤</span>
              <h3>Personal Summary</h3>
            </Link>
            <Link to="/project-working" className="quick-link-card">
              <span className="quick-link-icon">💻</span>
              <h3>Project and Working</h3>
            </Link>
            <Link to="/education" className="quick-link-card">
              <span className="quick-link-icon">🎓</span>
              <h3>Education Level</h3>
            </Link>
            <Link to="/hard-skills" className="quick-link-card">
              <span className="quick-link-icon">⚙️</span>
              <h3>Hard Skills</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

