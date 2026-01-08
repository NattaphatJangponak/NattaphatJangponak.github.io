import { FaGraduationCap, FaArrowRight, FaFilePdf } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import transcriptDoc from '../asset/doc/Transcript_watermark_sarabun.pdf';
import professionalDoc from '../asset/doc/Professional_watermark_sarabun.pdf';

const Education = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto p-8 animate-slide-up">
      <div className="resume-card">
        <div className="resume-section-header">
          <div className="resume-icon-box">
            <FaGraduationCap />
          </div>
          <h2 className="resume-section-title">
            {language === 'th' ? 'ระดับการศึกษา' : 'Education Level'}
          </h2>
        </div>

        <div className="space-y-6">
          {/* University */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-3">
                <span className="resume-arrow mt-2"><FaArrowRight size={20} /></span>
                <h3 className="font-bold text-2xl text-green-800 leading-tight">
                  {language === 'th' ? "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ" : "King Mongkut's University of Technology North Bangkok"}
                </h3>
              </div>
              <span className="resume-date flex-shrink-0 ml-4">[2021-2025]</span>
            </div>
            <div className="pl-8 text-2xl text-gray-700 leading-relaxed mb-3">
              <p className="font-semibold">{language === 'th' ? 'ปริญญาตรี คณะวิทยาศาสตร์ประยุกต์' : "Bachelor's Degree Faculty of Applied"}</p>
              <p>{language === 'th' ? 'สาขาวิทยาการคอมพิวเตอร์และสารสนเทศ' : 'Science Program in Computer and Information Science'}</p>
            </div>
            {/* Documents Grid */}
            <div className="pl-8 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {/* Transcript Card */}
              <a href={transcriptDoc} target="_blank" rel="noopener noreferrer" className="group text-decoration-none">
                <div className="relative overflow-hidden rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all bg-white">
                  {/* Icon Area */}
                  <div className="aspect-video bg-gray-50 flex items-center justify-center group-hover:bg-green-50 transition-colors">
                    <FaFilePdf className="text-5xl text-red-500/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Label Bar */}
                  <div className="p-3 border-t border-gray-100 bg-white">
                    <p className="text-lg font-bold text-center text-gray-700 group-hover:text-green-700 transition-colors truncate">
                      {language === 'th' ? 'ดูทรานสคริปต์' : 'View Transcript'}
                    </p>
                  </div>
                </div>
              </a>

              {/* Professional/Certificate Card */}
              <a href={professionalDoc} target="_blank" rel="noopener noreferrer" className="group text-decoration-none">
                <div className="relative overflow-hidden rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all bg-white">
                  {/* Icon Area */}
                  <div className="aspect-video bg-gray-50 flex items-center justify-center group-hover:bg-green-50 transition-colors">
                    <FaFilePdf className="text-5xl text-red-500/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Label Bar */}
                  <div className="p-3 border-t border-gray-100 bg-white">
                    <p className="text-lg font-bold text-center text-gray-700 group-hover:text-green-700 transition-colors truncate">
                      {language === 'th' ? 'ดูใบรับรอง' : 'View Certificate'}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* High School */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-3">
                <span className="resume-arrow mt-2"><FaArrowRight size={20} /></span>
                <h3 className="font-bold text-2xl text-green-800 leading-tight">
                  {language === 'th' ? 'โรงเรียนศรีบุณยานนท์' : 'Sriboonyanon High school'}
                </h3>
              </div>
              <span className="resume-date flex-shrink-0 ml-4">[2018-2021]</span>
            </div>
            <div className="pl-8 text-2xl text-gray-700 leading-relaxed mb-3">
              <p>{language === 'th' ? 'แผนการเรียน: วิทยาศาสตร์-คณิตศาสตร์' : 'Majoring: Grade 12'}</p>
              <p>{language === 'th' ? 'เกรดเฉลี่ย : 3.20' : 'GPA : 3.20'}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
