const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax

const average = students.filter(
  (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston
