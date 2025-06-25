const start = 17;
const end = 25;
let number;

for (let i = start; i < end; i++) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

console.log(number);

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);

//   if (i === 5) {
//     console.log("Met the number 5, interrupt the execution of the cycle");
//     break;
//   }
// }

// console.log("Log after cycle");
