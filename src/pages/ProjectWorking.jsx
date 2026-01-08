import profileImage2 from "../asset/image2.jpg";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaBriefcase, FaArrowRight, FaEye } from "react-icons/fa";
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


// import aiImg1 from "../asset/ai/1.png";
// import aiImg2 from "../asset/ai/2.png";
import aiImg3 from "../asset/ai/Segment_0.jpg";
import aiImg4 from "../asset/ai/Segment ai2_0.png";
import aiImg5 from "../asset/ai/Prediction of wild blueberry yield.png";





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

  return (
    <>
      <div className="max-w-7xl mx-auto p-8 animate-slide-up">
        {/* Header Image with Frame */}
        {/* Header Image with Premium Frame */}
        <div className="max-w-sm mx-auto mb-12 relative group perspective-1000">
          {/* Decorative background glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-700 animate-pulse-slow"></div>

          {/* Main container */}
          <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-[2rem] shadow-2xl border border-white/50 ring-1 ring-green-100/50 transform transition-transform duration-500 hover:-translate-y-2 hover:rotate-1">
            <div className="rounded-xl overflow-hidden shadow-inner border border-gray-100/50 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img src={profileImage2} alt="Header" className="w-full h-auto block transform transition duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>

        <div className="resume-card animate-delay-100">
          <div className="resume-section-header">
            <div className="resume-icon-box">
              <FaBriefcase />
            </div>
            <h2 className="resume-section-title">
              {language === 'th' ? 'โปรเจกต์และการทำงาน' : 'Project and Working'}
            </h2>
          </div>

          <div className="space-y-8">
            {/* Robotics Project */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="font-bold text-2xl flex items-center gap-2">
                  {language === 'th' ? 'โปรเจกต์หุ่นยนต์' : 'Robotics Project'}
                </h3>
                <span className="resume-date">[2020-2021]</span>
              </div>

              <div className="space-y-2">
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'หุ่นยนต์บังคับจอย PS2 เดินตามเส้นและพลิกตัวได้ด้วยบอร์ด Arduino Nano ใช้ DJI Tello ในการควบคุมโดรน' : 'Joy PS2-controlled robot that tracks lines, performs flips with an Arduino nano board. Using DJI Tello to direct the drone.'}</span>
                </div>
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'แอปพลิเคชันโคมไฟอัจฉริยะ (Smart Lamp) พัฒนาด้วย Android Studio ควบคุมอุณหภูมิ ความชื้น ไฟ RGB และแสดงสภาพอากาศ' : 'A smart lamp application that makes use of Android Studio to control temperature, humidity, and RGB lighting as well as the weather.'}</span>
                </div>
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'ใช้เครื่องอ่านคีย์การ์ด RFID เพื่อเปิด-ปิดหน้าจอ LED ของโทรศัพท์มือถือ พัฒนาด้วย Android Studio' : 'Using an RFID keycard reader to turn on and off a mobile phone\'s LED display Android Studio.'}</span>
                </div>
              </div>

              {/* Image Grid */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {robotImages.map((img, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-all"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white text-sm font-medium">{img.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IoT Project */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="font-bold text-2xl">{language === 'th' ? 'โปรเจกต์ IoT' : 'IoT Project'}</h3>
                <span className="resume-date">[2023-2025]</span>
              </div>
              <div className="space-y-3">
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'กำลังทำโปรเจกต์ตู้ตรวจจับขวดพลาสติก/โลหะ โดยใช้บอร์ด NodeMCU ESP32 สำหรับภาควิชาวิศวกรรมไฟฟ้า มจพ.' : 'I\'m utilizing the Board Nodemcu ESP32, a detector that is The Plastic/Metal bottle Detecting cabinet, for an IOT project I\'m working on for Electrical Engineering at KMUTNB.'}</span>
                </div>
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'ใช้บอร์ด NodeMCU ESP8266 และเซ็นเซอร์ RFID สร้างสื่อการสอน IoT ให้กับนักศึกษานวัตกรรมชีวภาพ ม.มหิดล' : 'Using the Board Nodemcu ESP8266 Sensor RFID board, create and Instruct MU Bio-Innovation students in IOT projects.'}</span>
                </div>
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'ระบบฟาร์มเห็ดอัจฉริยะ (Smart Mushroom Farm) ผสาน IoT และ Computer Vision เพื่อตรวจสอบอุณหภูมิ ความชื้น และการเติบโตของเห็ด' : 'Smart Mushroom Farm IoT system integrating sensors and computer vision to monitor temperature, humidity, and mushroom growth.'}</span>
                </div>
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'พัฒนาระบบแจ้งเตือนการกินยา (Medicine Alarm) ด้วยไมโครคอนโทรลเลอร์ IoT เพื่อแจ้งเตือนผู้ป่วยให้ทานยาตรงเวลา' : 'Developed a generic Medicine Alarm system using IoT microcontrollers to notify patients for timely medication adherence.'}</span>
                </div>
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'สร้างเครื่องมือตรวจสอบอุณหภูมิเห็ด เพื่อบันทึกและแสดงข้อมูลสภาพแวดล้อมแบบเรียลไทม์' : 'Created a dedicated Mushroom Temperature Monitor to log and display real-time environmental data for agricultural optimization.'}</span>
                </div>

                {/* IoT Image Gallery */}
                <div className="mt-4 pt-4 border-t border-dashed border-gray-100">
                  <h4 className="text-2xl font-semibold text-gray-500 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    {language === 'th' ? 'แกลเลอรีผลงาน' : 'Project Gallery'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { src: iotImg1, label: "Plastic/Metal Bottle Detecting Cabinet" },
                      { src: iotImg2, label: "Smart Mushroom Farm" },
                      { src: iotImg3, label: "Medicine Alarm" },
                      { src: iotImg4, label: "Mushroom Temp Monitor" },
                      { src: iotImg5, label: "Pi Home Assistant ESP32" },
                      { src: iotImg6, label: "IoT Neon Project" }
                    ].map((img, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all"
                        onClick={() => setSelectedImage(img)}
                      >
                        {/* Image */}
                        <div className="aspect-video bg-gray-50 overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.label}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Overlay / Handle */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <FaEye className="text-white text-3xl drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform" />
                        </div>

                        {/* Label Bar */}
                        <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-xl font-bold text-center text-gray-800 truncate px-2">{img.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Web Framework Project */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="font-bold text-2xl">{language === 'th' ? 'โปรเจกต์และเฟรมเวิร์กเว็บ' : 'Project & Working Web-Framework'}</h3>
                <span className="resume-date">[2021-2024]</span>
              </div>
              <div className="space-y-2">
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'มีประสบการณ์พัฒนาระบบ ERP สำหรับหลากหลายอุตสาหกรรมด้วย Odoo, Python, Java และ PostgreSQL นอกจากนี้ยังสร้างเกมด้วย Pygame และ Java, โคลนเว็บไซต์ Adwoo และ Tinner ด้วย HTML, CSS และ PHP, พัฒนาเว็บไซต์คำนวณคณิตศาสตร์และพล็อตกราฟด้วย React รวมถึงพัฒนาเว็บไซต์สำหรับ AEKI โดยใช้ Firebase, React และ NoSQL' : 'The person has experience working on ERP systems for various Industries using Odoo, Python, Java, and SQL with PostgreSQL. They have also Created games using Pygame and Java, cloned websites Adwoo and Tinner using HTML, CSS, and PHP, and built a React website for mathematical operations and graphing. Additionally, they have created a website using Firebase, React, and NOSQL for AEKI.'}</span>
                </div>
                {/* Web Framework Image Gallery */}
                <div className="mt-4 pt-4 border-t border-dashed border-gray-100">
                  <h4 className="text-2xl font-semibold text-gray-500 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    {language === 'th' ? 'แกลเลอรีผลงาน' : 'Project Gallery'}
                  </h4>

                  {/* Featured Image (Before Grid) */}
                  <div
                    className="mb-4 h-48 sm:h-64 md:h-[300px] group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all"
                    onClick={() => setSelectedImage({ src: webImg1, label: "Web Mushroom Monitoring System" })}
                  >
                    <div className="aspect-video bg-gray-50 overflow-hidden">
                      <img
                        src={webImg1}
                        alt="Web Mushroom Monitoring System"
                        className="w-full h-48 sm:h-64 md:h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <FaEye className="text-white text-3xl drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-xl font-bold text-center text-gray-800 truncate px-2">Web Mushroom Monitoring System</p>
                    </div>
                  </div>

                  {/* Featured Image (Before Grid) */}
                  <div
                    className="mb-4 h-48 sm:h-64 md:h-[300px] group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all"
                    onClick={() => setSelectedImage({ src: webImg2, label: "Web AEKI" })}
                  >
                    <div className="aspect-video bg-gray-50 overflow-hidden">
                      <img
                        src={webImg2}
                        alt="Web AEKI"
                        className="w-full h-48 sm:h-64 md:h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <FaEye className="text-white text-3xl drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-xl font-bold text-center text-gray-800 truncate px-2">Web AEKI</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { src: webImg3, label: "Adwoo 2022" },
                      { src: webImg4, label: "Tinner 2023" },
                      { src: webImg5, label: "Art Toy 2024" },
                    ].map((img, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all"
                        onClick={() => setSelectedImage(img)}
                      >
                        {/* Image */}
                        <div className="aspect-video bg-gray-50 overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.label}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Overlay / Handle */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <FaEye className="text-white text-3xl drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform" />
                        </div>

                        {/* Label Bar */}
                        <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-xl font-bold text-center text-gray-800 truncate px-2">{img.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Featured Image (Before Grid) */}
                  <div
                    className="mb-4 h-48 sm:h-64 md:h-[300px] group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all"
                    onClick={() => setSelectedImage({ src: mobileImg, label: "List Mobile Flutter App " })}
                  >
                    <div className="aspect-video bg-gray-50 overflow-hidden">
                      <img
                        src={mobileImg}
                        alt="Mobile Flutter App"
                        className="w-full h-48 sm:h-64 md:h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <FaEye className="text-white text-3xl drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-xl font-bold text-center text-gray-800 truncate px-2">List Mobile Flutter App</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Project AI */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="font-bold text-2xl">{language === 'th' ? 'โปรเจกต์ AI' : 'Project AI'}</h3>
                <span className="resume-date">[2023-2025]</span>
              </div>
              <div className="space-y-2">
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'สร้าง Python Kaggle kernel โดยใช้โมเดล XCBoost และ module pickle เพื่อทำนายผลผลิตบลูเบอร์รี่ป่า และ deploy บน Streamlit web app' : 'Create a Python Kaggle kernel using an XCBoost-trained model and the pickle module to forecast wild blueberry yield, and deploy Streamlit web apps to display production.'}</span>
                </div>
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'โปรเจกต์นี้ใช้หุ่นยนต์, IoT และ YOLOv8 (Roboflow) ร่วมกับ React/Flutter AI dashboard เพื่อตรวจสอบการเติบโตของเห็ด ลดการปนเปื้อน และจัดการจากระยะไกล' : 'This project uses robotics, IoT, and YOLOv8 (Roboflow) with React/Flutter AI dashboards to monitor mushroom growth, reduce contamination, and enable remote management.'}</span>
                </div>
                {/* Ai Image Gallery */}
                <div className="mt-4 pt-4 border-t border-dashed border-gray-100">
                  <h4 className="text-2xl font-semibold text-gray-500 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    {language === 'th' ? 'แกลเลอรีผลงาน' : 'Project Gallery'}
                  </h4>

                  {/* Featured Image (Before Grid) */}
                  <div
                    className="mb-4 h-[300px] group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all"
                    onClick={() => setSelectedImage({ src: aiImg5, label: "Prediction of wild blueberry yield" })}
                  >
                    <div className="aspect-video bg-gray-50 overflow-hidden">
                      <img
                        src={aiImg5}
                        alt="Prediction of wild blueberry yield"
                        className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <FaEye className="text-white text-3xl drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-xl font-bold text-center text-gray-800 truncate px-2">Prediction of wild blueberry yield</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[

                      { src: aiImg3, label: "Matrices in computer vision" },
                      { src: aiImg4, label: "Matrices in computer vision" },
                    ].map((img, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all"
                        onClick={() => setSelectedImage(img)}
                      >
                        {/* Image */}
                        <div className="aspect-video bg-gray-50 overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.label}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Overlay / Handle */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <FaEye className="text-white text-3xl drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform" />
                        </div>

                        {/* Label Bar */}
                        <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-xl font-bold text-center text-gray-800 truncate px-2">{img.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project UX/UI */}
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="font-bold text-2xl">{language === 'th' ? 'โปรเจกต์ UX/UI' : 'Project UX/UI'}</h3>
                <span className="resume-date">[2021-2024]</span>
              </div>
              <div className="space-y-2">
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'ใช้ Adobe XD สร้าง Prototype แอปพลิเคชันร้านดอกไม้และช่างซ่อมบำรุง และโปรเจกต์อื่นๆ' : 'Use Adobe XD to create a prototype for an app for flower shop and one for a handyman, and other projects.'}</span>
                </div>
                <div className="resume-list-item">
                  <span className="resume-arrow"><FaArrowRight size={12} className="mt-1.5" /></span>
                  <span>{language === 'th' ? 'ใช้ Figma สร้าง Prototype เว็บแอปพลิเคชันระบบจัดการคลังสินค้าร้านอาหาร และโปรเจกต์อื่นๆ' : 'Use Figma to create a web app prototype for a restaurant warehouse management system, and other projects.'}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Premium Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center">
            {/* Image Container with Glow & Frame */}
            <div className="relative group" onClick={(e) => e.stopPropagation()}>
              {/* Close Button - Moved Inside */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 z-50 p-2 group/btn"
              >
                <div className="bg-white/80 backdrop-blur-sm text-green-600 rounded-full p-2 shadow-lg hover:scale-110 transition-transform hover:bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </button>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

              <div className="relative bg-white/5 p-1 rounded-2xl ring-1 ring-white/10 backdrop-blur-sm shadow-2xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.label}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-lg border border-white/10"
                />
              </div>

              {/* Caption Pill */}
              <div className="mt-4 flex justify-center">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full shadow-lg">
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
