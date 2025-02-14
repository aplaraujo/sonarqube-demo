import { average } from "../src/average";

describe("average", () => {
    it("should return 7.4", () => {
        const gradeA = 6.7;
        const gradeB = 8.5;
        const gradeC = 7.0;

        const result = 7.4;
        expect(average(gradeA, gradeB, gradeC)).toBe(result);
    });

    it("should return 9.7", () => {
        const gradeA = 9.8;
        const gradeB = 10;
        const gradeC = 9.5;

        const result = 9.7;
        expect(average(gradeA, gradeB, gradeC)).toBe(result);
    });

    it("should return 5.4", () => {
        const gradeA = 6.5;
        const gradeB = 1.8;
        const gradeC = 7.2;

        const result = 5.4;
        expect(average(gradeA, gradeB, gradeC)).toBe(result);
    });
})