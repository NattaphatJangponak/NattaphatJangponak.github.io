import { FaCog, FaUserCog, FaArrowRight, FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaAndroid, FaEye, FaGitAlt, FaGithub, FaFigma, FaRaspberryPi } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiFlutter, SiAdobexd, SiDocker, SiFirebase, SiPostgresql, SiMysql, SiArduino, SiNodered, SiHomeassistant } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';
import KineticText from '../components/KineticText';
import TiltCard from '../components/TiltCard';

const HardSkills = () => {
  const { language } = useLanguage();

  // Skill data organized for Bento Grid
  const programmingSkills = [
    { icon: FaJava, name: 'Java (OOP)', color: 'text-red-500', size: '2x1' },
    { icon: FaPython, name: 'Python', color: 'text-blue-500', size: '1x1' },
    { icon: SiCplusplus, name: 'C/C++', color: 'text-blue-700', size: '1x1' },
    { icons: [{ Icon: FaHtml5, color: 'text-orange-600' }, { Icon: FaCss3Alt, color: 'text-blue-600' }], name: 'HTML5 / CSS', size: '1x1' },
    { icon: FaJs, name: 'Javascript', color: 'text-yellow-500', size: '1x1' },
    { icon: SiTypescript, name: 'Typescript', color: 'text-blue-600', size: '2x1' },
  ];

  const toolsFrameworks = [
    { icons: [{ Icon: FaReact, color: 'text-cyan-400' }, { Icon: FaVuejs, color: 'text-green-500' }], name: 'React / Vue', size: '2x1' },
    { icons: [{ Icon: SiFlutter, color: 'text-cyan-500' }, { Icon: FaAndroid, color: 'text-green-600' }], name: 'Flutter / Android', size: '1x1' },
    { icon: FaEye, name: 'Computer Vision', color: 'text-gray-600', size: '1x1' },
    { icons: [{ Icon: FaGitAlt, color: 'text-red-500' }, { Icon: FaGithub, color: 'text-gray-800' }], name: 'Git / GitHub', size: '1x1' },
    { icons: [{ Icon: FaFigma, color: 'text-purple-500' }, { Icon: SiAdobexd, color: 'text-pink-700' }], name: 'Figma / Adobe XD', size: '1x1' },
  ];

  const serverSkills = [
    { icon: SiDocker, name: 'Docker', color: 'text-blue-500', size: '1x1' },
    { icon: SiFirebase, name: 'Firebase', color: 'text-yellow-500', size: '1x1' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-400', size: '1x1' },
    { icon: SiMysql, name: 'MySQL', color: 'text-blue-600', size: '1x1' },
  ];

  const edgeSkills = [
    { icon: FaRaspberryPi, name: 'Raspberry-pi', color: 'text-red-600', size: '2x1' },
    { icon: SiArduino, name: 'Arduino', color: 'text-teal-600', size: '1x1' },
    { icon: SiNodered, name: 'Node-red', color: 'text-red-700', size: '1x1' },
    { icon: SiHomeassistant, name: 'Home Assistant', color: 'text-blue-500', size: '2x1' },
  ];

  const SkillCard = ({ skill, index }) => {
    const Icon = skill.icon;
    const icons = skill.icons;

    return (
      <TiltCard
        tiltIntensity={10}
        className={`skill-card glass-card ${skill.size === '2x1' ? 'bento-item-2x1' :
            skill.size === '1x2' ? 'bento-item-1x2' :
              skill.size === '2x2' ? 'bento-item-2x2' : 'bento-item-1x1'
          }`}
      >
        <div className="flex items-center gap-3 h-full">
          {icons ? (
            <div className="flex gap-2">
              {icons.map((iconItem, i) => (
                <iconItem.Icon key={i} className={`text-2xl ${iconItem.color} group-hover:scale-110 transition-transform`} />
              ))}
            </div>
          ) : (
            <Icon className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform`} />
          )}
          <span className="font-bold text-xl text-gray-700">{skill.name}</span>
        </div>
      </TiltCard>
    );
  };

  const SkillSection = ({ title, skills, delay }) => (
    <ScrollReveal animation="fadeUp" delay={delay}>
      <div className="mb-8">
        <div className="flex gap-2 items-center mb-4">
          <span className="resume-arrow"><FaArrowRight /></span>
          <h3 className="text-green-800 font-bold text-2xl">{title}</h3>
        </div>
        <div className="bento-grid">
          {skills.map((skill, index) => (
            <ScrollReveal key={index} animation="scale" delay={delay + (index * 0.05)}>
              <SkillCard skill={skill} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Hard Skills Card */}
      <ScrollReveal animation="fadeUp" delay={0.1}>
        <div className="resume-card glass-card">
          <div className="resume-section-header">
            <div className="resume-icon-box micro-hover">
              <FaCog className="animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <h2 className="resume-section-title">
              <KineticText
                text={language === 'th' ? 'ทักษะความสามารถ' : 'Hard Skills'}
                animation="bounce"
                staggerDelay={0.04}
              />
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <SkillSection
                title={language === 'th' ? 'ภาษาโปรแกรม' : 'Programming Language'}
                skills={programmingSkills}
                delay={0.2}
              />
              <SkillSection
                title={language === 'th' ? 'เครื่องมือและเฟรมเวิร์ก' : 'Tools and Framework'}
                skills={toolsFrameworks}
                delay={0.3}
              />
            </div>

            {/* Right Column */}
            <div>
              <SkillSection
                title={language === 'th' ? 'เซิร์ฟเวอร์' : 'Server'}
                skills={serverSkills}
                delay={0.4}
              />
              <SkillSection
                title={language === 'th' ? 'การประมวลผลแบบ Edge' : 'Edge Computing'}
                skills={edgeSkills}
                delay={0.5}
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Soft Skills Card */}
      <ScrollReveal animation="fadeUp" delay={0.5}>
        <div className="resume-card glass-card">
          <div className="resume-section-header">
            <div className="resume-icon-box micro-hover">
              <FaUserCog />
            </div>
            <h2 className="resume-section-title">
              <KineticText
                text={language === 'th' ? 'ทักษะทางสังคม (Soft Skills)' : 'Soft Skills'}
                animation="stagger"
                staggerDelay={0.03}
              />
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { text: language === 'th' ? 'ความคิดสร้างสรรค์' : 'Creativity', delay: 0.6 },
              { text: language === 'th' ? 'การทำงานเป็นทีมและความร่วมมือ' : 'Teamwork and Collaboration', delay: 0.7 },
              { text: language === 'th' ? 'ความยืดหยุ่นและการปรับตัว' : 'Flexibility and Adaptability', delay: 0.8 },
            ].map((item, index) => (
              <ScrollReveal key={index} animation="fadeLeft" delay={item.delay}>
                <div className="flex gap-3 items-center text-gray-700 text-2xl font-bold glass-card p-4 rounded-xl micro-hover group">
                  <span className="resume-arrow group-hover:translate-x-2 transition-transform">
                    <FaArrowRight size={24} />
                  </span>
                  <span className="group-hover:text-green-700 transition-colors">{item.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}

export default HardSkills
