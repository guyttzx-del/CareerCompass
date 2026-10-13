import { describe, expect, it } from "vitest";
import { opportunities } from "../data";
import { filterOpportunities } from "./domain";
describe("filterOpportunities", () => { it("searches title, company, and skills", () => { expect(filterOpportunities(opportunities, "React", "ทั้งหมด")).toHaveLength(2); }); it("filters by type", () => { expect(filterOpportunities(opportunities, "", "สหกิจ")).toHaveLength(3); }); });
