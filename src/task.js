function calculateTotalPrice(order) {
  let sum = 0;
  for (let index = 0; index < order.length; index++) {
    sum += order[index];
  }
  return sum;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
