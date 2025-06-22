console.log(0 || false); // false
console.log(false || 0); // 0

const a = 10 + 11;
const b = 2 - 1;

console.log(a || b); // ""
console.log("" || null); // null
