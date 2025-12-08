import { FaCog, FaUserCog, FaArrowRight, FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaAndroid, FaEye, FaGitAlt, FaGithub, FaFigma, FaRaspberryPi } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiFlutter, SiAdobexd, SiFirebase, SiPostgresql, SiMysql, SiArduino, SiNodered, SiHomeassistant } from 'react-icons/si';

const HardSkills = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 animate-slide-up">
      <div className="resume-card">
        <div className="resume-section-header">
          <div className="resume-icon-box">
            <FaCog />
          </div>
          <h2 className="resume-section-title">Hard Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Programming Language */}
            <div>
              <div className="flex gap-2 items-center mb-2">
                <span className="resume-arrow"><FaArrowRight /></span>
                <h3 className="text-green-800 font-bold">Programming Language</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <FaJava className="text-2xl text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Java (OOP)</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <FaPython className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Python</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <SiCplusplus className="text-2xl text-blue-700 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">C/C++</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <div className="flex gap-1">
                    <FaHtml5 className="text-2xl text-orange-600 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300">/</span>
                    <FaCss3Alt className="text-2xl text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-medium text-gray-700">HTML5 / CSS</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <FaJs className="text-2xl text-yellow-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Javascript</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <SiTypescript className="text-2xl text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Typescript</span>
                </div>
              </div>
            </div>

            {/* Tools and Framework */}
            <div>
              <div className="flex gap-2 items-center mb-2">
                <span className="resume-arrow"><FaArrowRight /></span>
                <h3 className="text-green-800 font-bold">Tools and Framework</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <div className="flex gap-1">
                    <FaReact className="text-2xl text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300">/</span>
                    <FaVuejs className="text-2xl text-green-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-medium text-gray-700">React / Vue</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <div className="flex gap-1">
                    <SiFlutter className="text-2xl text-cyan-500 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300">/</span>
                    <FaAndroid className="text-2xl text-green-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-medium text-gray-700">Flutter / Android</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <FaEye className="text-2xl text-gray-600 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Computer Vision</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <div className="flex gap-1">
                    <FaGitAlt className="text-2xl text-red-500 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300">/</span>
                    <FaGithub className="text-2xl text-gray-800 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-medium text-gray-700">Git / GitHub</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <div className="flex gap-1">
                    <FaFigma className="text-2xl text-purple-500 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300">/</span>
                    <SiAdobexd className="text-2xl text-pink-700 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-medium text-gray-700">Figma / Adobe XD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Server */}
            <div>
              <div className="flex gap-2 items-center mb-2">
                <span className="resume-arrow"><FaArrowRight /></span>
                <h3 className="text-green-800 font-bold">Server</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <SiFirebase className="text-2xl text-yellow-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Firebase</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <SiPostgresql className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <SiMysql className="text-2xl text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">MySQL</span>
                </div>
              </div>
            </div>

            {/* Edge Computing */}
            <div>
              <div className="flex gap-2 items-center mb-2">
                <span className="resume-arrow"><FaArrowRight /></span>
                <h3 className="text-green-800 font-bold">Edge Computing</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <FaRaspberryPi className="text-2xl text-red-600 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Raspberry-pi</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <SiArduino className="text-2xl text-teal-600 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Arduino</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <SiNodered className="text-2xl text-red-700 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Node-red</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-green-200 transition-all hover:-translate-y-1 group">
                  <SiHomeassistant className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-700">Home Assistant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-card">
        <div className="resume-section-header">
          <div className="resume-icon-box">
            <FaUserCog />
          </div>
          <h2 className="resume-section-title">Soft Skills</h2>
        </div>

        <div className="space-y-2">
          <div className="flex gap-3 items-center text-gray-700 text-sm">
            <span className="resume-arrow"><FaArrowRight /></span>
            <span>Creativity</span>
          </div>
          <div className="flex gap-3 items-center text-gray-700 text-sm">
            <span className="resume-arrow"><FaArrowRight /></span>
            <span>Teamwork and Collaboration</span>
          </div>
          <div className="flex gap-3 items-center text-gray-700 text-sm">
            <span className="resume-arrow"><FaArrowRight /></span>
            <span>Flexibility and Adaptability</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HardSkills
