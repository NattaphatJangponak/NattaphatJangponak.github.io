import './Resume.css'

const Resume = () => {
  return (
    <div className="resume-container">
      {/* Header Section */}
      <div className="resume-header">
        <div className="header-left">
          <h1 className="name">Nattaphat Jangponak</h1>
          <div className="personal-info">
            <p><strong>Birth Date:</strong> 29 October 2002</p>
            <p><strong>Age:</strong> 23 Year</p>
            <p><strong>Nickname:</strong> J</p>
          </div>
        </div>
        <div className="header-right">
          <div className="contact-info">
            <p><strong>Phone:</strong> +6694-550-9631</p>
            <p><strong>Email:</strong> j.javatst@gmail.com</p>
            <p><strong>Address:</strong> 92/375, Moo 5, Mueang Nonthaburi, Nonthaburi 11000</p>
            <p><strong>GitHub:</strong> github.com/NattaphatJangponak</p>
          </div>
        </div>
      </div>

      <div className="resume-content">
        {/* Left Column */}
        <div className="left-column">
          {/* Profile Picture */}
          <div className="profile-picture">
            <div className="hexagon">
              <img src="https://via.placeholder.com/200x200?text=Profile" alt="Profile" />
            </div>
          </div>

          {/* Personal Summary */}
          <section className="section">
            <div className="section-header">
              <span className="icon">👤</span>
              <h2>Personal Summary</h2>
            </div>
            <p className="summary-text">
              I am a recent graduate in computer and Information science at the Faculty of Applied Science. 
              I've developed an intense curiosity in coursework related to the Internet of Things and mobile 
              application development. I'm currently searching for an Internship on the Internet of Things 
              company so I could put my outstanding technological talents and gained academic expertise to the 
              best use. I am committed to Improving my programming, creativity, and applied abilities while 
              actively seeking out ways to participate in my passion projects and gain priceless experience 
              for Improved Job-output.
            </p>
          </section>

          {/* Project and Working */}
          <section className="section">
            <div className="section-header">
              <span className="icon">💻</span>
              <h2>Project and Working</h2>
            </div>
            
            <div className="project-item">
              <h3 className="project-title">IoT Project [2020-2021]</h3>
              <ul className="project-list">
                <li>Joy PS2-controlled robot that tracks lines, performs flips with an Arduino nano board. Using DJI Tello to direct the drone.</li>
                <li>A smart lamp application that makes use of Android Studio to control temperature, humidity, and RGB lighting as well as the weather.</li>
                <li>Using an RFID keycard reader to turn on and off a mobile phone's LED display Android Studio.</li>
              </ul>
            </div>

            <div className="project-item">
              <h3 className="project-title">IoT Project [2023-2025]</h3>
              <ul className="project-list">
                <li>I'm utilizing the Board Nodemcu ESP32, a detector that is The Plastic/Metal bottle Detecting cabinet, for an IOT project I'm working on for Electrical Engineering at KMUTNB.</li>
                <li>Using the Board Nodemcu ESP8266 Sensor RFID board, create and Instruct MU Bio-Innovation students in IOT projects.</li>
                <li>Smart Mushroom Farm IoT system integrating sensors and computer vision to monitor temperature, humidity, and mushroom growth.</li>
              </ul>
            </div>

            <div className="project-item">
              <h3 className="project-title">Project & Working Web-Framework [2021-2024]</h3>
              <ul className="project-list">
                <li>The person has experience working on ERP systems for various Industries using Odoo, Python, Java, and SQL with PostgreSQL. They have also Created games using Pygame and Java, cloned websites Adwoo and Tinner using HTML, CSS, and PHP, and built a React website for mathematical operations and graphing. Additionally, they have created a website using Firebase, React, and NOSQL for AEKI.</li>
              </ul>
            </div>

            <div className="project-item">
              <h3 className="project-title">Project AI [2023-2025]</h3>
              <ul className="project-list">
                <li>Create a Python Kaggle kernel using an XCBoost-trained model and the pickle module to forecast wild blueberry yield, and deploy Streamlit web apps to display production.</li>
                <li>This project uses robotics, IoT, and YOLOv8 (Roboflow) with React/Flutter AI dashboards to monitor mushroom growth, reduce contamination, and enable remote management.</li>
              </ul>
            </div>

            <div className="project-item">
              <h3 className="project-title">Project UX/UI [2021-2024]</h3>
              <ul className="project-list">
                <li>Use Adobe XD to create a prototype for an app for flower shop and one for a handyman, and other projects.</li>
                <li>Use Figma to create a web app prototype for a restaurant warehouse management system, and other projects.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Education Level */}
          <section className="section">
            <div className="section-header">
              <span className="icon">🎓</span>
              <h2>Education Level</h2>
            </div>
            <div className="education-item">
              <h3 className="education-title">King Mongkut's University of Technology North [2021-2025]</h3>
              <p>Bachelor's Degree Faculty of Applied Science Program in Computer and Information Science</p>
            </div>
            <div className="education-item">
              <h3 className="education-title">Sriboonyanon High school [2018-2021]</h3>
              <p><strong>Majoring:</strong> Grade 12</p>
              <p><strong>GPA:</strong> 3.20</p>
            </div>
          </section>

          {/* Hard Skills */}
          <section className="section">
            <div className="section-header">
              <span className="icon">⚙️</span>
              <h2>Hard Skills</h2>
            </div>
            <div className="skills-group">
              <h3 className="skills-subtitle">Programming Language:</h3>
              <ul className="skills-list">
                <li>Java (OOP)</li>
                <li>Python</li>
                <li>C/C++</li>
                <li>HTML5/CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
              </ul>
            </div>
            <div className="skills-group">
              <h3 className="skills-subtitle">Tools and Framework:</h3>
              <ul className="skills-list">
                <li>React/Vue</li>
                <li>Flutter/Android Studio</li>
                <li>Computer Vision AI</li>
                <li>Git/GitHub</li>
                <li>Figma / Adobe XD</li>
              </ul>
            </div>
            <div className="skills-group">
              <h3 className="skills-subtitle">Server:</h3>
              <ul className="skills-list">
                <li>Firebase</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="skills-group">
              <h3 className="skills-subtitle">Edge Computing:</h3>
              <ul className="skills-list">
                <li>Raspberry-pi</li>
                <li>Arduino</li>
                <li>Node-red (Low-code)</li>
                <li>Home Assistant</li>
              </ul>
            </div>
          </section>

          {/* Soft Skills */}
          <section className="section">
            <div className="section-header">
              <span className="icon">⭐</span>
              <h2>Soft Skills</h2>
            </div>
            <ul className="skills-list">
              <li>Creativity</li>
              <li>Teamwork and Collaboration</li>
              <li>Flexibility and Adaptability</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resume

