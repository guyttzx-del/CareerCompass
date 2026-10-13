import type { Application, ChatMessage, Course, Opportunity, Repo, StudentProfile } from "./types";
export const profile: StudentProfile = { name: "มุกดา วัฒนกิจ", email: "mookda@cmu.ac.th", university: "มหาวิทยาลัยเชียงใหม่", major: "วิทยาการคอมพิวเตอร์", year: "ปี 3", skills: ["JavaScript", "React", "Figma", "Git"], completion: 78 };
export const opportunities: Opportunity[] = [
  { id: "coop-1", title: "Frontend Developer Co-op", company: "LINE MAN Wongnai", type: "สหกิจ", location: "กรุงเทพฯ", mode: "Hybrid", salary: "฿15,000 / เดือน", posted: "2 วันที่แล้ว", match: 96, logo: "L", tone: "green", tags: ["React", "TypeScript", "GraphQL"], description: "ร่วมสร้าง product ที่มีผู้ใช้จริง ตั้งแต่ component design ไปจนถึงการปล่อย feature ใน production", featured: true },
  { id: "coop-2", title: "Product Design Co-op", company: "SCB TechX", type: "สหกิจ", location: "กรุงเทพฯ", mode: "On-site", salary: "฿18,000 / เดือน", posted: "3 วันที่แล้ว", match: 91, logo: "S", tone: "purple", tags: ["Figma", "UX Research", "Design System"], description: "ทำงานร่วมกับ product team และช่วยสร้าง design system สำหรับผู้ใช้หลายล้านคน", featured: true },
  { id: "coop-3", title: "Junior Software Engineer", company: "FlowAccount", type: "ฝึกงาน", location: "กรุงเทพฯ", mode: "Remote", salary: "฿35,000–45,000 / เดือน", posted: "5 วันที่แล้ว", match: 84, logo: "F", tone: "blue", tags: ["Node.js", "React", "PostgreSQL"], description: "สร้างเครื่องมือการเงินสำหรับธุรกิจไทยกับทีมวิศวกรขนาดเล็กที่ปล่อย feature ได้เร็ว" },
  { id: "coop-4", title: "Data Analyst Co-op", company: "KBTG", type: "สหกิจ", location: "กรุงเทพฯ", mode: "Hybrid", salary: "฿16,000 / เดือน", posted: "1 สัปดาห์ที่แล้ว", match: 77, logo: "K", tone: "orange", tags: ["SQL", "Python", "Dashboard"], description: "ใช้ข้อมูลจริงเพื่อช่วยทีมธุรกิจตัดสินใจ และฝึกสื่อสาร insight ให้คนที่ไม่ใช่สายเทคนิคเข้าใจ" },
];
export const applications: Application[] = [
  { id: "app-1", opportunityId: "coop-1", status: "กำลังพิจารณา", date: "12 มิ.ย. 2024", note: "รอผลคัดกรองเบื้องต้น" },
  { id: "app-2", opportunityId: "coop-2", status: "สัมภาษณ์", date: "08 มิ.ย. 2024", note: "สัมภาษณ์กับทีม Design · 18 มิ.ย." },
  { id: "app-3", opportunityId: "coop-3", status: "ส่งใบสมัคร", date: "03 มิ.ย. 2024", note: "บริษัทได้รับใบสมัครแล้ว" },
];
export const courses: Course[] = [
  { id: "course-1", title: "React และการสร้าง Web Application", provider: "Frontend Masters", level: "กำลังเหมาะกับคุณ", duration: "6 ชั่วโมง", reason: "เติมช่องว่างจากงาน Frontend ที่คุณ match สูงสุด", progress: 35, color: "blue" },
  { id: "course-2", title: "SQL สำหรับการทำงานจริง", provider: "DataCamp", level: "แนะนำถัดไป", duration: "4 ชั่วโมง", reason: "หลายบริษัทสหกิจต้องการทักษะ data literacy พื้นฐาน", progress: 0, color: "green" },
  { id: "course-3", title: "Portfolio Storytelling", provider: "CareerCompass Lab", level: "เพิ่มความโดดเด่น", duration: "2 ชั่วโมง", reason: "เล่า project ให้เห็น impact ได้ชัดขึ้นในเรซูเมและสัมภาษณ์", progress: 0, color: "amber" },
];
export const repos: Repo[] = [
  { name: "campus-events", description: "เว็บรวมกิจกรรมมหาวิทยาลัยพร้อมระบบลงทะเบียน", language: "TypeScript", stars: 12, updated: "อัปเดต 2 วันที่แล้ว", color: "#3178c6" },
  { name: "moodboard-ui", description: "ทดลองสร้าง UI library สำหรับ portfolio ส่วนตัว", language: "CSS", stars: 8, updated: "อัปเดต 1 สัปดาห์ที่แล้ว", color: "#563d7c" },
  { name: "coffee-chatbot", description: "บอทตอบคำถามเมนูกาแฟด้วย RAG เบื้องต้น", language: "Python", stars: 5, updated: "อัปเดต 3 สัปดาห์ที่แล้ว", color: "#3572a5" },
];
export const initialChat: ChatMessage[] = [{ id: "welcome", role: "assistant", text: "สวัสดีมุกดา 👋 ฉันคือ CareerCompass Coach ช่วยดูเรซูเม แนะนำสหกิจ และวางแผนวิชาที่ควรเรียนเพิ่มได้เลย วันนี้อยากเริ่มจากเรื่องไหน?", time: "09:41" }];
export const replies: Record<string, string> = {
  "ช่วยดูเรซูเมให้หน่อย": "เรซูเมคุณมีจุดแข็งที่ดีคือมี React และ Figma อยู่แล้ว แนะนำให้เพิ่มผลลัพธ์ที่วัดได้ในแต่ละ project เช่น จำนวนผู้ใช้ เวลาโหลดที่ลดลง หรือปัญหาที่แก้ได้ และย้าย GitHub project ที่เกี่ยวข้องไว้ด้านบน",
  "แนะนำสหกิจที่เหมาะกับฉัน": "ตำแหน่ง Frontend Developer Co-op ที่ LINE MAN Wongnai match คุณสูงสุดที่ 96% เพราะใช้ React, TypeScript และทำงานร่วมกับ product team โดยตรง",
  "ควรเรียนวิชาอะไรเพิ่ม": "ลำดับที่แนะนำคือ 1) React และ Web Application 2) SQL สำหรับการทำงานจริง 3) Portfolio Storytelling เพื่อเติมทั้ง technical skill และการนำเสนอผลงาน",
};
