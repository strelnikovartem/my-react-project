const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues); // [-3, -68, -37]
// до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

const bigValues = values.filter((value) => value > 1000);
console.log(bigValues); // []
// до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригінальний масив values не змінився

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((i) => i % 2 === 0);
const oddNumbers = numbers.filter((i) => i % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);
