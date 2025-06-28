const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}

function calculateTotalPrice(order) {
  let sum = 0;
  for (const number of order) {
    sum += number;
  }
  return sum;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
