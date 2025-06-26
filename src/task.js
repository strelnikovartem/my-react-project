const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true

if (!emptyArray) {
  console.log("if is in progress");
} else {
  console.log("else is not performed");
}

if (nonEmptyArray) {
  console.log("if is in progress");
} else {
  console.log("else is not performed");
}
