# Resume Web App

เว็บแอปพลิเคชันแสดง Resume ของ Nattaphat Jangponak สร้างด้วย Vite และ React

## การติดตั้ง

```bash
npm install
```

## การรันโปรเจกต์

```bash
npm run dev
```

เว็บแอปจะรันที่ `http://localhost:5173`

## การ Build สำหรับ Production

```bash
npm run build
```

ไฟล์ที่ build จะอยู่ในโฟลเดอร์ `dist`

## ข้อมูลใน Resume

- ข้อมูลส่วนตัวและติดต่อ
- ประวัติการศึกษา
- โปรเจกต์และงานที่ทำ (IoT, Web Framework, AI, UX/UI)
- Hard Skills (Programming Languages, Tools, Server, Edge Computing)
- Soft Skills

## โครงสร้างหน้าเว็บ

เว็บแอปแบ่งเป็นหลายหน้า route:

- `/personal-summary` - ข้อมูลส่วนตัวและสรุปประวัติ
- `/project-working` - โปรเจกต์และงานที่ทำ
- `/education` - ประวัติการศึกษา
- `/hard-skills` - ทักษะทางเทคนิค

หน้าแรก (`/`) จะ redirect ไปที่ `/personal-summary` อัตโนมัติ

## เทคโนโลยีที่ใช้

- React 18
- React Router DOM 6
- Vite
- Tailwind CSS 3

## หมายเหตุ

- รูปโปรไฟล์ใช้รูปภาพจริงจาก `src/asset/image.jpg`

## โครงสร้างไฟล์

```
src/
├── components/
│   └── Navigation.jsx       # Navigation bar (ใช้ Tailwind CSS)
├── pages/
│   ├── PersonalSummary.jsx  # หน้า Personal Summary (ใช้ Tailwind CSS)
│   ├── ProjectWorking.jsx   # หน้า Project and Working (ใช้ Tailwind CSS)
│   ├── Education.jsx        # หน้า Education (ใช้ Tailwind CSS)
│   └── HardSkills.jsx       # หน้า Hard Skills (ใช้ Tailwind CSS)
├── App.jsx                  # Main App component with routing
├── main.jsx
└── index.css                # Tailwind CSS directives
```

## Tailwind CSS Configuration

โปรเจกต์นี้ใช้ Tailwind CSS สำหรับ styling ทั้งหมด
- ไฟล์ config: `tailwind.config.js`
- PostCSS config: `postcss.config.js`
- Custom colors: `primary: #4CAF50`, `secondary: #2c3e50`

