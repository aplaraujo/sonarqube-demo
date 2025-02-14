export const average = (gradeA, gradeB, gradeC) => {
    const weightA = 2;
    const weightB = 3;
    const weightC = 5;

    const result = ((gradeA * weightA) + (gradeB * weightB) + (gradeC * weightC)) / (weightA + weightB + weightC);

    return Number(result.toFixed(1));
}