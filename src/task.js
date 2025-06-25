function sumUpTo(number) {
  let sum = 0;

  for (let i = 0; i <= number; i += 1) {
    console.log(i);
    sum += i;
  }

  return sum;
}

console.log(sumUpTo(5)); // 15
// console.log(sumUpTo(10)); // 55
// console.log(sumUpTo(0)); // 0
