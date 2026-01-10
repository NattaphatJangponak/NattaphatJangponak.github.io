import { Suspense, lazy } from "react";
import profileImage from "../asset/image.jpg";
import { FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaCalendarAlt, FaBirthdayCake, FaSmile } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import KineticText from '../components/KineticText';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxSection from '../components/ParallaxSection';

// Lazy load Hero3D for performance
const Hero3D = lazy(() => import('../components/Hero3D'));

const PersonalSummary = () => {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white -z-10" />}>
        <Hero3D />
      </Suspense>

      <div className="max-w-7xl mx-auto p-8 relative z-10">
        {/* Contact & Personal Info Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start">
          {/* Profile Image with Parallax */}
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <div className="relative">
              <ParallaxSection speed={0.1}>
                <div className="relative w-64 h-80 mx-auto md:mx-0 group" style={{ top: '50px' }}>

                  {/* Shadow layer */}
                  <div className="absolute inset-0 bg-green-600 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] opacity-20 transform -rotate-12 translate-x-2 translate-y-2"></div>

                  {/* Image */}
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="relative w-full h-full object-cover rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-2xl z-10 ring-4 ring-white/50 group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: '60% 0%' }}
                  />
                </div>
              </ParallaxSection>

              {/* Personal Info Badges */}
              <div className="mt-6 flex flex-wrap gap-4 text-xl font-bold text-gray-600 justify-center md:justify-start">
                <ScrollReveal animation="fadeUp" delay={0.3}>
                  <span className="flex items-center gap-2 glass-card px-4 py-2 rounded-full micro-hover">
                    <FaCalendarAlt className="text-green-600" /> 29 Oct 2002
                  </span>
                </ScrollReveal>
                <ScrollReveal animation="fadeUp" delay={0.4}>
                  <span className="flex items-center gap-2 glass-card px-4 py-2 rounded-full micro-hover">
                    <FaBirthdayCake className="text-green-600" /> 23 Years
                  </span>
                </ScrollReveal>
                <ScrollReveal animation="fadeUp" delay={0.5}>
                  <span className="flex items-center gap-2 glass-card px-4 py-2 rounded-full micro-hover">
                    <FaSmile className="text-green-600" /> Nickname: J
                  </span>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal animation="fadeLeft" delay={0.2}>
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-1 gap-4 text-2xl font-bold text-gray-700 mb-6">
                {[
                  { icon: FaPhoneAlt, text: '+6694-550-9631', delay: 0.3 },
                  { icon: FaEnvelope, text: 'jj.java1st@gmail.com', delay: 0.4 },
                  { icon: FaMapMarkerAlt, text: '92/375, Moo 5, Mueang Nonthaburi, Nonthaburi 11000', delay: 0.5 },
                  { icon: FaGithub, text: 'github.com/NattaphatJangponak', delay: 0.6 },
                ].map((item, index) => (
                  <ScrollReveal key={index} animation="fadeUp" delay={item.delay}>
                    <div className="flex items-center gap-3 glass-card p-4 rounded-2xl micro-hover group cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300">
                        <item.icon />
                      </div>
                      <span className="group-hover:text-green-700 transition-colors">{item.text}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Personal Summary Card */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="resume-card glass-card">
            <div className="resume-section-header">
              <div className="resume-icon-box micro-hover">
                <FaUser />
              </div>
              <h2 className="resume-section-title">
                <KineticText
                  text={language === 'th' ? 'ข้อมูลส่วนตัว' : 'Personal Summary'}
                  animation="wave"
                  staggerDelay={0.03}
                />
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed text-3xl">
              {language === 'th' ? (
                <>
                  ผมเพิ่งสำเร็จการศึกษาในสาขาวิทยาการคอมพิวเตอร์และสารสนเทศ จากคณะวิทยาศาสตร์ประยุกต์
                  ผมมีความอยากรู้อยากเห็นอย่างมากในหลักสูตรที่เกี่ยวข้องกับ Internet of Things และการพัฒนาแอปพลิเคชันบนมือถือ
                  ขณะนี้ผมกำลังมองหาที่ทำงานในด้าน Internet of Things, Web หรือ AI เพื่อที่จะได้ใช้ความสามารถทางเทคโนโลยีที่โดดเด่น
                  และความเชี่ยวชาญทางวิชาการที่ได้รับมาให้เกิดประโยชน์สูงสุด ผมมุ่งมั่นที่จะพัฒนาทักษะการเขียนโปรแกรม ความคิดสร้างสรรค์
                  และความสามารถในการประยุกต์ใช้ ในขณะเดียวกันก็กระตือรือร้นที่จะหาโอกาสในการเข้าร่วมโครงการที่ผมหลงใหล
                  และได้รับประสบการณ์อันล้ำค่าเพื่อผลงานการทำงานที่ดียิ่งขึ้น
                </>
              ) : (
                <>
                  I am a recent graduate in Computer and Information Science at the Faculty of Applied Science.
                  I've developed an intense curiosity in coursework related to the Internet of Things and mobile application development.
                  I'm currently searching for a job in Internet of Things, Web Development, or AI so I could put my outstanding technological talents
                  and gained academic expertise to the best use. I am committed to improving my programming, creativity, and applied abilities
                  while actively seeking out ways to participate in my passion projects and gain priceless experience for improved job output.
                </>
              )}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PersonalSummary;
