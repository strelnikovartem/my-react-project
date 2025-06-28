function getSlice(array, value) {
  const index = array.indexOf(value);

  if (array.indexOf(value) === -1) {
    return [];
  } else {
    return array.slice(0, index + 1);
  }
}

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));

const tags = [];

for (let i = 0; i < 3; i += 1) {
  tags.push(`tag-${i}`);
}

// console.log(tags);

function createArrayOfNumbers(min, max) {
  const number = [];
  for (let index = min; index <= max; index++) {
    number.push(index);
  }
  return number;
}

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));
