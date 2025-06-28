function getEvenNumbers(start, end) {
  const dubl = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      dubl.push(i);
    }
  }
  return dubl;
}

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
