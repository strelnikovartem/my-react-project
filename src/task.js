function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }

  return `Product ${productName} not found!`;
}

console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Droid"));
console.log(calculateTotalPrice("Blaster"));
