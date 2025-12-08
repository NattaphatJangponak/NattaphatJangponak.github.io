import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 animate-slide-up">
      <div className="resume-card">
        <div className="resume-section-header">
          <div className="resume-icon-box">
            <FaGraduationCap />
          </div>
          <h2 className="resume-section-title">Education Level</h2>
        </div>

        <div className="space-y-6">
          {/* University */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-3">
                <span className="resume-arrow mt-1"><FaArrowRight size={14} /></span>
                <h3 className="font-bold text-lg text-green-800 leading-tight">King Mongkut's University of Technology North Bangkok</h3>
              </div>
              <span className="resume-date flex-shrink-0 ml-4">[2021-2025]</span>
            </div>
            <div className="pl-8 text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold">Bachelor's Degree Faculty of Applied</p>
              <p>Science Program in Computer and Information Science</p>
            </div>
          </div>

          {/* High School */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-3">
                <span className="resume-arrow mt-1"><FaArrowRight size={14} /></span>
                <h3 className="font-bold text-lg text-green-800 leading-tight">Sriboonyanon High school</h3>
              </div>
              <span className="resume-date flex-shrink-0 ml-4">[2018-2021]</span>
            </div>
            <div className="pl-8 text-sm text-gray-700 leading-relaxed">
              <p>Majoring: Grade 12</p>
              <p>GPA : 3.20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
