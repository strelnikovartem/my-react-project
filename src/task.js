const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};

const total = 0;

const values = Object.values(book);

for (const value of values) {
  total += 1;
}

console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
console.log(total);
