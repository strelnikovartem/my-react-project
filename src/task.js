const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index},`);
});

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach();

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
