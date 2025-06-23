function calculateTotal(number) {
  let totalNumber = 0;
  let total = 0;
  while (totalNumber <= number) {
    total += totalNumber;
    totalNumber++;
  }
  return total;
}

console.log(calculateTotal(18));
