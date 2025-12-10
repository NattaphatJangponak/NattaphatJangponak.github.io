import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import PersonalSummary from './pages/PersonalSummary'
import ProjectWorking from './pages/ProjectWorking'
import Education from './pages/Education'
import HardSkills from './pages/HardSkills'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/personal-summary" replace />} />
          <Route path="/personal-summary" element={<PersonalSummary />} />
          <Route path="/project-working" element={<ProjectWorking />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hard-skills" element={<HardSkills />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

