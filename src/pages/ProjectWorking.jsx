import profileImage2 from "../asset/image2.jpg";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaBriefcase, FaArrowRight, FaEye, FaTimes } from "react-icons/fa";
import robotImg1 from "../asset/robot/Joy PS2-controlled.png";
import robotImg2 from "../asset/robot/RFID keycard.png";
import robotImg3 from "../asset/robot/dji tello.png";
import robotImg4 from "../asset/robot/performs flips .png";
import robotImg5 from "../asset/robot/smart lamp.png";
import robotImg6 from "../asset/robot/DSC00049-removebg-preview.png";

import iotImg1 from "../asset/iot/Plastic/Metal bottle Detecting cabinet.jpg";
import iotImg2 from "../asset/iot/Plastic/Smart Mushroom Farm.jpg";
import iotImg3 from "../asset/iot/Plastic/alarm กินยา.jpg";
import iotImg4 from "../asset/iot/Plastic/tempmushroom.jpg";
import iotImg5 from "../asset/iot/Plastic/pi home assitant esp32.jpg";
import iotImg6 from "../asset/iot/Plastic/Iot neon.png";

import webImg1 from "../asset/web/web1.png";
import webImg2 from "../asset/web/web2.png";
import webImg3 from "../asset/web/Adwoo 2022.png";
import webImg4 from "../asset/web/Tinner 2023.png";
import webImg5 from "../asset/web/ArtToy 2024.png";
import mobileImg from "../asset/web/mobile.png";

import aiImg3 from "../asset/ai/Segment_0.jpg";
import aiImg4 from "../asset/ai/Segment ai2_0.png";
import aiImg5 from "../asset/ai/Prediction of wild blueberry yield.png";

import ScrollReveal from "../components/ScrollReveal";
import KineticText from "../components/KineticText";
import TiltCard from "../components/TiltCard";
import ParallaxSection from "../components/ParallaxSection";

const ProjectWorking = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const robotImages = [
    { src: robotImg1, label: "Joy PS2-controlled" },
    { src: robotImg2, label: "RFID keycard" },
    { src: robotImg3, label: "DJI Tello" },
    { src: robotImg4, label: "Performs Flips" },
    { src: robotImg5, label: "Smart Lamp" },
    { src: robotImg6, label: "Bottle Detector" },
  ];

  // Gallery Item Component with micro-interactions
  const GalleryItem = ({ img, onClick, delay, featured = false }) => (
    <ScrollReveal animation="scale" delay={delay}>
      <TiltCard tiltIntensity={8} className="h-full">
        <div
          className={`gallery-item group relative overflow-hidden rounded-xl shadow-sm border border-gray-100/50 cursor-pointer ${featured ? 'h-48 sm:h-64 md:h-[300px]' : ''}`}
          onClick={onClick}
        >
          <div className={`${featured ? 'h-full' : 'aspect-video'} bg-gray-50 overflow-hidden`}>
            <img
              src={img.src}
              alt={img.label}
              className={`w-full ${featured ? 'h-full' : 'h-full'} object-cover transform group-hover:scale-110 transition-transform duration-700`}
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Eye icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 rounded-full glass-dark flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
              <FaEye className="text-white text-2xl" />
            </div>
          </div>

          {/* Label */}
          <div className="absolute bottom-0 inset-x-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="glass-card rounded-lg p-2">
              <p className="text-lg font-bold text-center text-gray-800 truncate">{img.label}</p>
            </div>
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );

  // Project Section Component
  const ProjectSection = ({ title, date, children, delay }) => (
    <ScrollReveal animation="fadeUp" delay={delay}>
      <div className="relative pl-6 border-l-4 border-green-400 mb-8">
        {/* Timeline dot */}
        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg" />

        <div className="flex justify-between items-baseline mb-3">
          <h3 className="font-bold text-2xl flex items-center gap-2 gradient-text">
            {title}
          </h3>
          <span className="resume-date glass-card px-3 py-1 rounded-full">{date}</span>
        </div>
        {children}
      </div>
    </ScrollReveal>
  );

  return (
    <>
      <div className="max-w-7xl mx-auto p-8">
        {/* Header Image with Premium Frame & Parallax */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <ParallaxSection speed={0.05}>
            <div className="max-w-sm mx-auto mb-12 relative group perspective-1000">
              {/* Decorative background glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-50 transition duration-700 animate-pulse-slow"></div>

              {/* Main container */}
              <TiltCard tiltIntensity={12} className="relative">
                <div className="glass-card p-4 rounded-[2rem] shadow-2xl ring-1 ring-white/20">
                  <div className="rounded-xl overflow-hidden shadow-inner border border-white/20 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img src={profileImage2} alt="Header" className="w-full h-auto block transform transition duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </TiltCard>
            </div>
          </ParallaxSection>
        </ScrollReveal>

        {/* Main Content Card */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="resume-card glass-card">
            <div className="resume-section-header">
              <div className="resume-icon-box micro-hover">
                <FaBriefcase />
              </div>
              <h2 className="resume-section-title">
                <KineticText
                  text={language === 'th' ? 'โปรเจกต์และการทำงาน' : 'Project and Working'}
                  animation="wave"
                  staggerDelay={0.02}
                />
              </h2>
            </div>

            <div className="space-y-8">
              {/* Robotics Project */}
              <ProjectSection
                title={language === 'th' ? 'โปรเจกต์หุ่นยนต์' : 'Robotics Project'}
                date="[2020-2021]"
                delay={0.3}
              >
                <div className="space-y-2 mb-6">
                  {[
                    language === 'th' ? 'หุ่นยนต์บังคับจอย PS2 เดินตามเส้นและพลิกตัวได้ด้วยบอร์ด Arduino Nano ใช้ DJI Tello ในการควบคุมโดรน' : 'Joy PS2-controlled robot that tracks lines, performs flips with an Arduino nano board. Using DJI Tello to direct the drone.',
                    language === 'th' ? 'แอปพลิเคชันโคมไฟอัจฉริยะ (Smart Lamp) พัฒนาด้วย Android Studio ควบคุมอุณหภูมิ ความชื้น ไฟ RGB และแสดงสภาพอากาศ' : 'A smart lamp application that makes use of Android Studio to control temperature, humidity, and RGB lighting as well as the weather.',
                    language === 'th' ? 'ใช้เครื่องอ่านคีย์การ์ด RFID เพื่อเปิด-ปิดหน้าจอ LED ของโทรศัพท์มือถือ พัฒนาด้วย Android Studio' : 'Using an RFID keycard reader to turn on and off a mobile phone\'s LED display Android Studio.',
                  ].map((text, i) => (
                    <ScrollReveal key={i} animation="fadeLeft" delay={0.35 + i * 0.1}>
                      <div className="resume-list-item group">
                        <span className="resume-arrow group-hover:translate-x-1 transition-transform"><FaArrowRight size={12} className="mt-1.5" /></span>
                        <span className="group-hover:text-green-800 transition-colors">{text}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Robot Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {robotImages.map((img, index) => (
                    <GalleryItem
                      key={index}
                      img={img}
                      onClick={() => setSelectedImage(img)}
                      delay={0.4 + index * 0.05}
                    />
                  ))}
                </div>
              </ProjectSection>

              {/* IoT Project */}
              <ProjectSection
                title={language === 'th' ? 'โปรเจกต์ IoT' : 'IoT Project'}
                date="[2023-2025]"
                delay={0.4}
              >
                <div className="space-y-3 mb-6">
                  {[
                    language === 'th' ? 'กำลังทำโปรเจกต์ตู้ตรวจจับขวดพลาสติก/โลหะ โดยใช้บอร์ด NodeMCU ESP32 สำหรับภาควิชาวิศวกรรมไฟฟ้า มจพ.' : 'I\'m utilizing the Board Nodemcu ESP32, a detector that is The Plastic/Metal bottle Detecting cabinet, for an IOT project I\'m working on for Electrical Engineering at KMUTNB.',
                    language === 'th' ? 'ใช้บอร์ด NodeMCU ESP8266 และเซ็นเซอร์ RFID สร้างสื่อการสอน IoT ให้กับนักศึกษานวัตกรรมชีวภาพ ม.มหิดล' : 'Using the Board Nodemcu ESP8266 Sensor RFID board, create and Instruct MU Bio-Innovation students in IOT projects.',
                    language === 'th' ? 'ระบบฟาร์มเห็ดอัจฉริยะ (Smart Mushroom Farm) ผสาน IoT และ Computer Vision เพื่อตรวจสอบอุณหภูมิ ความชื้น และการเติบโตของเห็ด' : 'Smart Mushroom Farm IoT system integrating sensors and computer vision to monitor temperature, humidity, and mushroom growth.',
                    language === 'th' ? 'พัฒนาระบบแจ้งเตือนการกินยา (Medicine Alarm) ด้วยไมโครคอนโทรลเลอร์ IoT เพื่อแจ้งเตือนผู้ป่วยให้ทานยาตรงเวลา' : 'Developed a generic Medicine Alarm system using IoT microcontrollers to notify patients for timely medication adherence.',
                    language === 'th' ? 'สร้างเครื่องมือตรวจสอบอุณหภูมิเห็ด เพื่อบันทึกและแสดงข้อมูลสภาพแวดล้อมแบบเรียลไทม์' : 'Created a dedicated Mushroom Temperature Monitor to log and display real-time environmental data for agricultural optimization.',
                  ].map((text, i) => (
                    <ScrollReveal key={i} animation="fadeLeft" delay={0.45 + i * 0.08}>
                      <div className="resume-list-item group">
                        <span className="resume-arrow group-hover:translate-x-1 transition-transform"><FaArrowRight size={12} className="mt-1.5" /></span>
                        <span className="group-hover:text-green-800 transition-colors">{text}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                {/* IoT Gallery */}
                <div className="mt-4 pt-4 border-t border-dashed border-gray-200/50">
                  <ScrollReveal animation="fadeUp" delay={0.5}>
                    <h4 className="text-2xl font-semibold text-gray-500 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"></span>
                      {language === 'th' ? 'แกลเลอรีผลงาน' : 'Project Gallery'}
                    </h4>
                  </ScrollReveal>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { src: iotImg1, label: "Plastic/Metal Bottle Detecting Cabinet" },
                      { src: iotImg2, label: "Smart Mushroom Farm" },
                      { src: iotImg3, label: "Medicine Alarm" },
                      { src: iotImg4, label: "Mushroom Temp Monitor" },
                      { src: iotImg5, label: "Pi Home Assistant ESP32" },
                      { src: iotImg6, label: "IoT Neon Project" }
                    ].map((img, index) => (
                      <GalleryItem
                        key={index}
                        img={img}
                        onClick={() => setSelectedImage(img)}
                        delay={0.55 + index * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </ProjectSection>

              {/* Web Framework Project */}
              <ProjectSection
                title={language === 'th' ? 'โปรเจกต์และเฟรมเวิร์กเว็บ' : 'Project & Working Web-Framework'}
                date="[2021-2024]"
                delay={0.5}
              >
                <div className="space-y-2 mb-6">
                  <ScrollReveal animation="fadeLeft" delay={0.55}>
                    <div className="resume-list-item group">
                      <span className="resume-arrow group-hover:translate-x-1 transition-transform"><FaArrowRight size={12} className="mt-1.5" /></span>
                      <span className="group-hover:text-green-800 transition-colors">
                        {language === 'th' ? 'มีประสบการณ์พัฒนาระบบ ERP สำหรับหลากหลายอุตสาหกรรมด้วย Odoo, Python, Java และ PostgreSQL นอกจากนี้ยังสร้างเกมด้วย Pygame และ Java, โคลนเว็บไซต์ Adwoo และ Tinner ด้วย HTML, CSS และ PHP, พัฒนาเว็บไซต์คำนวณคณิตศาสตร์และพล็อตกราฟด้วย React รวมถึงพัฒนาเว็บไซต์สำหรับ AEKI โดยใช้ Firebase, React และ NoSQL' : 'The person has experience working on ERP systems for various Industries using Odoo, Python, Java, and SQL with PostgreSQL. They have also Created games using Pygame and Java, cloned websites Adwoo and Tinner using HTML, CSS, and PHP, and built a React website for mathematical operations and graphing. Additionally, they have created a website using Firebase, React, and NOSQL for AEKI.'}
                      </span>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Web Gallery */}
                <div className="mt-4 pt-4 border-t border-dashed border-gray-200/50">
                  <ScrollReveal animation="fadeUp" delay={0.6}>
                    <h4 className="text-2xl font-semibold text-gray-500 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"></span>
                      {language === 'th' ? 'แกลเลอรีผลงาน' : 'Project Gallery'}
                    </h4>
                  </ScrollReveal>

                  {/* Featured Images */}
                  <div className="space-y-4 mb-4">
                    <GalleryItem
                      img={{ src: webImg1, label: "Web Mushroom Monitoring System" }}
                      onClick={() => setSelectedImage({ src: webImg1, label: "Web Mushroom Monitoring System" })}
                      delay={0.65}
                      featured
                    />
                    <GalleryItem
                      img={{ src: webImg2, label: "Web AEKI" }}
                      onClick={() => setSelectedImage({ src: webImg2, label: "Web AEKI" })}
                      delay={0.7}
                      featured
                    />
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    {[
                      { src: webImg3, label: "Adwoo 2022" },
                      { src: webImg4, label: "Tinner 2023" },
                      { src: webImg5, label: "Art Toy 2024" },
                    ].map((img, index) => (
                      <GalleryItem
                        key={index}
                        img={img}
                        onClick={() => setSelectedImage(img)}
                        delay={0.75 + index * 0.05}
                      />
                    ))}
                  </div>

                  {/* Mobile Featured */}
                  <GalleryItem
                    img={{ src: mobileImg, label: "List Mobile Flutter App" }}
                    onClick={() => setSelectedImage({ src: mobileImg, label: "List Mobile Flutter App" })}
                    delay={0.9}
                    featured
                  />
                </div>
              </ProjectSection>

              {/* AI Project */}
              <ProjectSection
                title={language === 'th' ? 'โปรเจกต์ AI' : 'Project AI'}
                date="[2023-2025]"
                delay={0.6}
              >
                <div className="space-y-2 mb-6">
                  {[
                    language === 'th' ? 'สร้าง Python Kaggle kernel โดยใช้โมเดล XCBoost และ module pickle เพื่อทำนายผลผลิตบลูเบอร์รี่ป่า และ deploy บน Streamlit web app' : 'Create a Python Kaggle kernel using an XCBoost-trained model and the pickle module to forecast wild blueberry yield, and deploy Streamlit web apps to display production.',
                    language === 'th' ? 'โปรเจกต์นี้ใช้หุ่นยนต์, IoT และ YOLOv8 (Roboflow) ร่วมกับ React/Flutter AI dashboard เพื่อตรวจสอบการเติบโตของเห็ด ลดการปนเปื้อน และจัดการจากระยะไกล' : 'This project uses robotics, IoT, and YOLOv8 (Roboflow) with React/Flutter AI dashboards to monitor mushroom growth, reduce contamination, and enable remote management.',
                  ].map((text, i) => (
                    <ScrollReveal key={i} animation="fadeLeft" delay={0.65 + i * 0.1}>
                      <div className="resume-list-item group">
                        <span className="resume-arrow group-hover:translate-x-1 transition-transform"><FaArrowRight size={12} className="mt-1.5" /></span>
                        <span className="group-hover:text-green-800 transition-colors">{text}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                {/* AI Gallery */}
                <div className="mt-4 pt-4 border-t border-dashed border-gray-200/50">
                  <ScrollReveal animation="fadeUp" delay={0.7}>
                    <h4 className="text-2xl font-semibold text-gray-500 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"></span>
                      {language === 'th' ? 'แกลเลอรีผลงาน' : 'Project Gallery'}
                    </h4>
                  </ScrollReveal>

                  {/* Featured AI Image */}
                  <div className="mb-4">
                    <GalleryItem
                      img={{ src: aiImg5, label: "Prediction of wild blueberry yield" }}
                      onClick={() => setSelectedImage({ src: aiImg5, label: "Prediction of wild blueberry yield" })}
                      delay={0.75}
                      featured
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { src: aiImg3, label: "Matrices in computer vision" },
                      { src: aiImg4, label: "Matrices in computer vision" },
                    ].map((img, index) => (
                      <GalleryItem
                        key={index}
                        img={img}
                        onClick={() => setSelectedImage(img)}
                        delay={0.8 + index * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </ProjectSection>

              {/* UX/UI Project */}
              <ProjectSection
                title={language === 'th' ? 'โปรเจกต์ UX/UI' : 'Project UX/UI'}
                date="[2021-2024]"
                delay={0.7}
              >
                <div className="space-y-2">
                  {[
                    language === 'th' ? 'ใช้ Adobe XD สร้าง Prototype แอปพลิเคชันร้านดอกไม้และช่างซ่อมบำรุง และโปรเจกต์อื่นๆ' : 'Use Adobe XD to create a prototype for an app for flower shop and one for a handyman, and other projects.',
                    language === 'th' ? 'ใช้ Figma สร้าง Prototype เว็บแอปพลิเคชันระบบจัดการคลังสินค้าร้านอาหาร และโปรเจกต์อื่นๆ' : 'Use Figma to create a web app prototype for a restaurant warehouse management system, and other projects.',
                  ].map((text, i) => (
                    <ScrollReveal key={i} animation="fadeLeft" delay={0.75 + i * 0.1}>
                      <div className="resume-list-item group">
                        <span className="resume-arrow group-hover:translate-x-1 transition-transform"><FaArrowRight size={12} className="mt-1.5" /></span>
                        <span className="group-hover:text-green-800 transition-colors">{text}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ProjectSection>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Premium Image Modal with Glassmorphism */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          <div className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center z-10">
            {/* Image Container */}
            <div className="relative group" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 z-50 w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-700 hover:text-green-600 hover:scale-110 transition-all shadow-lg"
              >
                <FaTimes />
              </button>

              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>

              {/* Image */}
              <div className="relative glass-card p-2 rounded-2xl shadow-2xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.label}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 flex justify-center">
                <div className="glass-dark px-6 py-3 rounded-full">
                  <p className="text-white text-lg font-medium tracking-wide">
                    {selectedImage.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectWorking;
