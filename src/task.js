function greet(n) {
  console.log(`Welcome ${n}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest("Mango", greet); // "Registering Mango!"
// "Welcome Mango!"

registerGuest("ggg", notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"

console.log(greet);
