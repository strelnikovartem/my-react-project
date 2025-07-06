// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let totalPrice = 0;

//   for (const product of products) {
//     const keys = Object.keys(product);
//     for (const key of keys) {
//       if (product[key] === productName) {
//         totalPrice = product.price * product.quantity;
//       }
//       // totalPrice = `Product ${productName} not found!`;
//     }
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Droid"));

const user = {
  name: "Alice",
  age: 25,
};

user.modr = true;

const keys = Object.keys(user);

for (const key of keys) {
  console.log(user[key]);
}

console.log(keys);
