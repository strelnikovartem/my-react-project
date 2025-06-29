function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

function foo() {
  const args = Array.from(arguments);
  return args.join("-");
}

console.log(foo(1, 2, 3)); // Поверне "1-2-3"
console.log(foo(1, 2, 3, 4));
