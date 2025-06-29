function greet(username = "Guest") {
  console.log(`Hello, ${username}!`);
}

greet("Jacob"); // "Hello, Jacob!"
greet("Jac"); // "Hello, Jacob!"
greet(); // "Hello, Guest!"
