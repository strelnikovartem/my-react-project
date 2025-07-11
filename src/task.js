const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

const names = students
  .toSorted((a, b) => a.score - b.score)
  .map((student) => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
