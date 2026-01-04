import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navigation = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const activeClasses = "text-green-700 border-b-2 border-green-600"
  const inactiveClasses = "text-gray-500 hover:text-green-600 transition-colors"

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 mb-8">
      <div className="max-w-7xl mx-auto px-5 py-5 flex flex-wrap justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="no-underline group flex items-center gap-3">
            <img src="/favicon.png" alt="Logo" className="h-10 w-10 object-contain" />
            <h1 className="text-xl font-bold text-gray-900 m-0 uppercase tracking-wider">
              Nattaphat Jangponak
            </h1>
          </Link>
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-gray-700 focus:outline-none">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col w-full mt-4 gap-4 list-none m-0 p-0 md:flex md:flex-row md:w-auto md:mt-0 md:gap-6 items-center`}>
          <li>
            <Link
              to="/personal-summary"
              className={`px-3 py-2 text-sm font-bold uppercase tracking-wide no-underline block ${isActive('/personal-summary') ? activeClasses : inactiveClasses
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Personal Summary
            </Link>
          </li>
          <li>
            <Link
              to="/project-working"
              className={`px-3 py-2 text-sm font-bold uppercase tracking-wide no-underline block ${isActive('/project-working') ? activeClasses : inactiveClasses
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Project and Working
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className={`px-3 py-2 text-sm font-bold uppercase tracking-wide no-underline block ${isActive('/education') ? activeClasses : inactiveClasses
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Education Level
            </Link>
          </li>
          <li>
            <Link
              to="/hard-skills"
              className={`px-3 py-2 text-sm font-bold uppercase tracking-wide no-underline block ${isActive('/hard-skills') ? activeClasses : inactiveClasses
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Hard Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

