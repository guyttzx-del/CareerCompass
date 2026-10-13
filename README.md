# CareerCompass

CareerCompass คือระบบช่วยนักศึกษาเตรียมตัวสหกิจและวางเส้นทางอาชีพ โดยวิเคราะห์เรซูเม แนะนำตำแหน่งสหกิจ แนะนำวิชาที่ควรศึกษาเพิ่ม ใช้ GitHub เป็น Portfolio และมี AI Career Coach

## ฟีเจอร์ในเดโม

- Student workspace: Dashboard, Resume Review, Co-op Opportunities, Learning Path, GitHub Portfolio และ AI Coach
- Google Login flow แบบ Demo
- Resume readiness score พร้อม checklist และคำแนะนำจาก AI
- รายการสหกิจพร้อม match score, search/filter, save และ apply
- Personalized learning path จาก skill gap
- GitHub repository cards และ AI skill signal
- Admin workspace: overview, จัดการประกาศสหกิจ และจัดการวิชา/ทักษะ
- Responsive UI สำหรับ desktop, tablet และ mobile

## เริ่มต้นใช้งาน

```bash
npm install
npm run dev
```

เปิด `http://localhost:5173`

ตรวจสอบก่อนส่ง:

```bash
npm run lint
npm test
npm run build
```

## Demo flow สำหรับนำเสนอ

1. เริ่มที่ Dashboard เพื่อดู Resume readiness และตำแหน่งสหกิจที่ match
2. เปิด `ตรวจเรซูเม` แล้วกด `วิเคราะห์อีกครั้ง`
3. เปิด `สหกิจที่แนะนำ` ลองค้นหา `React`, บันทึกงาน และสมัครงาน
4. เปิด `วิชาที่ควรเรียน` แล้วกดเริ่มเรียน/เรียนต่อ
5. เปิด `GitHub Portfolio` เพื่อดู repository และ AI skill signal
6. เปิด `AI Career Coach` แล้วใช้ quick prompts
7. กด `เข้าสู่ Admin demo` เพื่อดู Admin dashboard และเพิ่มประกาศสหกิจ

## เทคโนโลยีและการ Deploy

- React + TypeScript + Vite
- GitHub + GitHub Actions สำหรับ lint, test และ build
- Cloudflare Pages สำหรับ frontend
- Cloudflare Workers/Pages Functions + D1 สำหรับ API และฐานข้อมูลใน phase production

ตั้งค่า Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22`

เดโมนี้ใช้ local state เพื่อเปิดนำเสนอได้ทันทีโดยไม่ต้องมี credentials จริง การเชื่อม Google OAuth, GitHub OAuth และ AI provider ให้ใช้ environment variables ใน `.env.example` และเก็บ secret จริงไว้ใน Cloudflare dashboard
