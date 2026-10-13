export const onRequestPost = async ({ request }: { request: Request }) => {
  const body = await request.json().catch(() => null) as { message?: unknown } | null;
  if (typeof body?.message !== "string" || body.message.trim().length === 0) return Response.json({ error: "message is required" }, { status: 400 });
  return Response.json({ reply: "ฉันช่วยวาง next move ให้ได้ ลองบอกสายงานหรือทักษะที่อยากพัฒนาเพิ่มเติมได้เลย", mode: "demo" });
};
