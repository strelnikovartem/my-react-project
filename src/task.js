function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(na, callback) {
  console.log(`Registering ${na}!`);
  callback(na);
}

registerGuest("Mango", greet); // "Registering Mango!"
// "Welcome Mango!"

registerGuest("ggg", notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"

console.log(greet);

function greet(n) {
  console.log(`Welcome ${n}!`);
}
