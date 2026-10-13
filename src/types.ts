export type Role = "student" | "admin";
export type ViewKey = "overview" | "resume" | "opportunities" | "learning" | "portfolio" | "coach" | "admin-overview" | "admin-opportunities" | "admin-learning";
export type JobType = "สหกิจ" | "ฝึกงาน" | "พาร์ทไทม์";
export type Status = "กำลังพิจารณา" | "สัมภาษณ์" | "ส่งใบสมัคร" | "ไม่ผ่าน";
export interface StudentProfile { name: string; email: string; university: string; major: string; year: string; skills: string[]; completion: number; }
export interface Opportunity { id: string; title: string; company: string; type: JobType; location: string; mode: string; salary: string; posted: string; match: number; logo: string; tone: string; tags: string[]; description: string; featured?: boolean; }
export interface Application { id: string; opportunityId: string; status: Status; date: string; note: string; }
export interface Course { id: string; title: string; provider: string; level: string; duration: string; reason: string; progress: number; color: string; }
export interface Repo { name: string; description: string; language: string; stars: number; updated: string; color: string; }
export interface ChatMessage { id: string; role: "assistant" | "user"; text: string; time: string; }
