# CareerCompass design

## Product goal

ช่วยนักศึกษาตัดสินใจว่าต้องปรับเรซูเม สมัครสหกิจตำแหน่งใด และควรเรียนอะไรเพิ่มเพื่อเข้าใกล้งานที่ต้องการมากขึ้น

## Frontend

- Student: overview, resume review, co-op search, learning path, GitHub portfolio และ AI coach
- Admin: dashboard, co-op CRUD และ curriculum/skill management
- ทุก flow มี populated, empty, disabled, focus-visible และ responsive state ที่เหมาะสม
- ข้อมูล demo ใช้ typed arrays และ pure filter helper เพื่อให้ต่อ API จริงได้ง่าย

## Backend contract

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/opportunities` | ค้นหา/กรองประกาศสหกิจ |
| POST | `/api/opportunities` | Admin เพิ่มประกาศ |
| PATCH | `/api/opportunities/:id` | Admin เปลี่ยนสถานะ |
| POST | `/api/applications` | ผู้ใช้สมัครสหกิจ |
| POST | `/api/resume/analyze` | วิเคราะห์เรซูเมผ่าน AI |
| GET | `/api/courses/recommended` | โหลด learning path ตาม skill gap |
| POST | `/api/github/connect` | GitHub OAuth callback |
| GET | `/api/github/repos` | โหลด public repository metadata |
| POST | `/api/ai/chat` | AI Career Coach proxy |

## Security

- Google/GitHub OAuth ใช้ server-side callback; ห้ามใส่ client secret ใน client bundle
- ตรวจ session และ role ในทุก mutation; job/course CRUD จำกัดเฉพาะ admin
- Validate ความยาวและรูปแบบ input ทั้ง client/server
- จำกัดขนาดและชนิดไฟล์เรซูเม พร้อมเก็บใน private storage เมื่อทำ production
- AI endpoint ต้องมี rate limit, timeout และไม่ส่ง token/ข้อมูลส่วนตัวเกินจำเป็นไปยัง provider
- GitHub token ต้องเก็บ encrypted และส่งให้ client เฉพาะ public metadata

## Acceptance criteria

- User Login ด้วย Google และเข้าหน้า Student ได้
- วิเคราะห์เรซูเมและเห็นคำแนะนำที่ actionable
- ค้นหา/บันทึก/สมัครสหกิจและเห็นสถานะ
- เห็นวิชาที่ควรเรียนตาม skill gap และกดอัปเดต progress ได้
- เชื่อม GitHub และเห็น repository ใน Portfolio
- สนทนากับ AI Coach ได้
- Admin จัดการประกาศสหกิจและวิชา/ทักษะได้
- Build, lint และ tests ผ่านก่อน merge
