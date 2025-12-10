import profileImage from "../asset/image.jpg";
import { FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaCalendarAlt, FaBirthdayCake, FaSmile } from 'react-icons/fa';

const PersonalSummary = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 animate-slide-up">
      {/* Contact & Personal Info Header (visible here for the resume look) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          {/* Profile Image with Blob Shape */}
          <div className="relative w-64 h-64 mx-auto md:mx-0">
            <div className="absolute inset-0 bg-green-600 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] opacity-20 transform -rotate-12 translate-x-2 translate-y-2"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-lg z-10 ring-4 ring-green-50"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600 justify-center md:justify-start">
            <span className="flex items-center gap-1"><FaCalendarAlt className="text-green-600" /> 29 Oct 2002</span>
            <span className="flex items-center gap-1"><FaBirthdayCake className="text-green-600" /> 23 Years</span>
            <span className="flex items-center gap-1"><FaSmile className="text-green-600" /> Nickname: J</span>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-3 text-sm text-gray-700 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-green-200 bg-green-50 flex items-center justify-center text-green-600"><FaPhoneAlt /></div>
              <span>+6694-550-9631</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-green-200 bg-green-50 flex items-center justify-center text-green-600"><FaEnvelope /></div>
              <span>jj.java1st@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-green-200 bg-green-50 flex items-center justify-center text-green-600"><FaMapMarkerAlt /></div>
              <span>92/375, Moo 5, Mueang Nonthaburi, Nonthaburi 11000</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-green-200 bg-green-50 flex items-center justify-center text-green-600"><FaGithub /></div>
              <span>github.com/NattaphatJangponak</span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-card">
        <div className="resume-section-header">
          <div className="resume-icon-box">
            <FaUser />
          </div>
          <h2 className="resume-section-title">Personal Summary</h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-justify">
          I am a recent graduate in Computer and Information Science at the Faculty of Applied Science.
          I've developed an intense curiosity in coursework related to the Internet of Things and mobile application development.
          I'm currently searching for an Internship in an Internet of Things company so I could put my outstanding technological talents
          and gained academic expertise to the best use. I am committed to improving my programming, creativity, and applied abilities
          while actively seeking out ways to participate in my passion projects and gain priceless experience for improved job output.
        </p>
      </div>
    </div>
  );
};

export default PersonalSummary;
