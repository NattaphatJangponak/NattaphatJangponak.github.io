import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  const activeClasses = "text-green-700 border-b-2 border-green-600"
  const inactiveClasses = "text-gray-500 hover:text-green-600 transition-colors"

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 mb-8">
      <div className="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center md:flex-col md:gap-5 md:px-5">
        <Link to="/" className="no-underline group">
          <h1 className="text-2xl font-bold text-gray-900 m-0 md:text-xl uppercase tracking-wider">
            Nattaphat Jangponak
          </h1>
        </Link>
        <ul className="flex gap-4 list-none m-0 p-0 flex-wrap md:justify-center md:gap-3">
          <li>
            <Link
              to="/personal-summary"
              className={`px-3 py-2 text-sm font-bold uppercase tracking-wide no-underline ${isActive('/personal-summary') ? activeClasses : inactiveClasses
                }`}
            >
              Personal Summary
            </Link>
          </li>
          <li>
            <Link
              to="/project-working"
              className={`px-3 py-2 text-sm font-bold uppercase tracking-wide no-underline ${isActive('/project-working') ? activeClasses : inactiveClasses
                }`}
            >
              Project and Working
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className={`px-3 py-2 text-sm font-bold uppercase tracking-wide no-underline ${isActive('/education') ? activeClasses : inactiveClasses
                }`}
            >
              Education Level
            </Link>
          </li>
          <li>
            <Link
              to="/hard-skills"
              className={`px-3 py-2 text-sm font-bold uppercase tracking-wide no-underline ${isActive('/hard-skills') ? activeClasses : inactiveClasses
                }`}
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

