import type { Opportunity } from "../types";
export function filterOpportunities(items: Opportunity[], search: string, type: string): Opportunity[] { const query = search.trim().toLowerCase(); return items.filter((item) => (!query || [item.title, item.company, item.location, ...item.tags].some((value) => value.toLowerCase().includes(query))) && (type === "ทั้งหมด" || item.type === type)); }
