import { FaGraduationCap, FaArrowRight, FaFilePdf } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import transcriptDoc from '../asset/doc/Transcript_watermark_sarabun.pdf';
import professionalDoc from '../asset/doc/Professional_watermark_sarabun.pdf';
import ScrollReveal from '../components/ScrollReveal';
import KineticText from '../components/KineticText';
import TiltCard from '../components/TiltCard';

const Education = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto p-8">
      <ScrollReveal animation="fadeUp" delay={0.1}>
        <div className="resume-card glass-card">
          <div className="resume-section-header">
            <div className="resume-icon-box micro-hover">
              <FaGraduationCap />
            </div>
            <h2 className="resume-section-title">
              <KineticText
                text={language === 'th' ? 'ระดับการศึกษา' : 'Education Level'}
                animation="wave"
                staggerDelay={0.03}
              />
            </h2>
          </div>

          <div className="space-y-8">
            {/* University - Scrollytelling Timeline */}
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="relative pl-8 border-l-4 border-gradient-to-b from-green-400 to-emerald-600 border-green-400">
                {/* Timeline dot */}
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg animate-pulse"></div>

                <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                  <div className="flex gap-3">
                    <span className="resume-arrow mt-2"><FaArrowRight size={20} /></span>
                    <h3 className="font-bold text-2xl text-green-800 leading-tight gradient-text">
                      {language === 'th' ? "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ" : "King Mongkut's University of Technology North Bangkok"}
                    </h3>
                  </div>
                  <span className="resume-date flex-shrink-0 glass-card px-3 py-1 rounded-full ml-8 md:ml-4">[2021-2025]</span>
                </div>
                <div className="pl-8 text-2xl text-gray-700 leading-relaxed mb-3">
                  <p className="font-semibold">{language === 'th' ? 'ปริญญาตรี คณะวิทยาศาสตร์ประยุกต์' : "Bachelor's Degree Faculty of Applied"}</p>
                  <p>{language === 'th' ? 'สาขาวิทยาการคอมพิวเตอร์และสารสนเทศ' : 'Science Program in Computer and Information Science'}</p>
                </div>

                {/* Documents Grid with TiltCard */}
                <div className="pl-8 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                  {/* Transcript Card */}
                  <ScrollReveal animation="scale" delay={0.3}>
                    <a href={transcriptDoc} target="_blank" rel="noopener noreferrer" className="group text-decoration-none block">
                      <TiltCard className="glass-card rounded-xl overflow-hidden">
                        <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all">
                          {/* Icon Area */}
                          <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-green-50 group-hover:to-emerald-50 transition-colors duration-500">
                            <FaFilePdf className="text-5xl text-red-500/80 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500" />
                          </div>
                          {/* Label Bar */}
                          <div className="p-3 border-t border-gray-100/50 bg-white/80 backdrop-blur">
                            <p className="text-lg font-bold text-center text-gray-700 group-hover:text-green-700 transition-colors truncate">
                              {language === 'th' ? 'ดูทรานสคริปต์' : 'View Transcript'}
                            </p>
                          </div>
                        </div>
                      </TiltCard>
                    </a>
                  </ScrollReveal>

                  {/* Professional/Certificate Card */}
                  <ScrollReveal animation="scale" delay={0.4}>
                    <a href={professionalDoc} target="_blank" rel="noopener noreferrer" className="group text-decoration-none block">
                      <TiltCard className="glass-card rounded-xl overflow-hidden">
                        <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all">
                          {/* Icon Area */}
                          <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-green-50 group-hover:to-emerald-50 transition-colors duration-500">
                            <FaFilePdf className="text-5xl text-red-500/80 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500" />
                          </div>
                          {/* Label Bar */}
                          <div className="p-3 border-t border-gray-100/50 bg-white/80 backdrop-blur">
                            <p className="text-lg font-bold text-center text-gray-700 group-hover:text-green-700 transition-colors truncate">
                              {language === 'th' ? 'ดูใบรับรอง' : 'View Certificate'}
                            </p>
                          </div>
                        </div>
                      </TiltCard>
                    </a>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>

            {/* High School - Scrollytelling Timeline */}
            <ScrollReveal animation="fadeUp" delay={0.4}>
              <div className="relative pl-8 border-l-4 border-green-300">
                {/* Timeline dot */}
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-300 to-emerald-400 shadow-lg"></div>

                <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                  <div className="flex gap-3">
                    <span className="resume-arrow mt-2"><FaArrowRight size={20} /></span>
                    <h3 className="font-bold text-2xl text-green-800 leading-tight">
                      {language === 'th' ? 'โรงเรียนศรีบุณยานนท์' : 'Sriboonyanon High school'}
                    </h3>
                  </div>
                  <span className="resume-date flex-shrink-0 glass-card px-3 py-1 rounded-full ml-8 md:ml-4">[2018-2021]</span>
                </div>
                <div className="pl-8 text-2xl text-gray-700 leading-relaxed mb-3">
                  <p>{language === 'th' ? 'แผนการเรียน: วิทยาศาสตร์-คณิตศาสตร์' : 'Majoring: Grade 12'}</p>
                  <p>{language === 'th' ? 'เกรดเฉลี่ย : 3.20' : 'GPA : 3.20'}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}

export default Education
