function multiply(...args) {
  console.log(args);
}

multiply(1, 2); // [1, 2]
multiply(1, 2, 3); // [1, 2, 3]
multiply(1, 2, 3, 4); // [1, 2, 3, 4]

function add(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum;
}

console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
