function greet(name) {
  return `Welcome ${name}!`;
}

// Викликаємо функцію greet і виводимо результат у консоль
console.log(greet("Mango")); // "Welcome Mango!"

// Виводимо функцію greet у консоль, не викликаючи її
console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;

console.log(result);
console.log(pointer);
