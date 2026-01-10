import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Navigation = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  const isActive = (path) => {
    return location.pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const activeClasses = "text-green-700 border-b-2 border-green-600"
  const inactiveClasses = "text-gray-500 hover:text-green-600 transition-colors"

  const menuItems = {
    personalSummary: language === 'th' ? 'ข้อมูลส่วนตัว' : 'Personal Summary',
    projectWorking: language === 'th' ? 'โปรเจกต์และการทำงาน' : 'Project and Working',
    education: language === 'th' ? 'ระดับการศึกษา' : 'Education Level',
    hardSkills: language === 'th' ? 'ทักษะความสามารถ' : 'Hard Skills',
  }

  return (
    <nav className="glass-nav sticky top-0 z-50 mb-8">
      <div className="max-w-7xl mx-auto px-5 py-5 flex flex-wrap justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="no-underline group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              <img src="/favicon.png" alt="Logo" className="relative h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 m-0 uppercase tracking-wider gradient-text-shine">
              Nattaphat Jangponak
            </h1>
          </Link>
          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full border border-gray-300 text-lg font-bold hover:bg-gray-50 hover:border-green-500 transition-all duration-300 micro-press"
            >
              {language === 'th' ? 'TH' : 'EN'}
            </button>
            <button onClick={toggleMenu} className="text-2xl text-gray-700 focus:outline-none micro-press">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col w-full mt-4 gap-4 list-none m-0 p-0 md:flex md:flex-row md:w-auto md:mt-0 md:gap-6 items-center`}>
          <li>
            <Link
              to="/personal-summary"
              className={`micro-link px-3 py-2 text-xl font-bold uppercase tracking-wide no-underline block ${isActive('/personal-summary') ? activeClasses : inactiveClasses
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {menuItems.personalSummary}
            </Link>
          </li>
          <li>
            <Link
              to="/project-working"
              className={`micro-link px-3 py-2 text-xl font-bold uppercase tracking-wide no-underline block ${isActive('/project-working') ? activeClasses : inactiveClasses
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {menuItems.projectWorking}
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className={`micro-link px-3 py-2 text-xl font-bold uppercase tracking-wide no-underline block ${isActive('/education') ? activeClasses : inactiveClasses
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {menuItems.education}
            </Link>
          </li>
          <li>
            <Link
              to="/hard-skills"
              className={`micro-link px-3 py-2 text-xl font-bold uppercase tracking-wide no-underline block ${isActive('/hard-skills') ? activeClasses : inactiveClasses
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {menuItems.hardSkills}
            </Link>
          </li>
          <li className="hidden md:block">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-lg font-bold hover:bg-green-50 hover:border-green-500 hover:text-green-700 transition-all duration-300 shadow-sm micro-press micro-glow"
              title={language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
            >
              {language === 'th' ? 'TH' : 'EN'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
