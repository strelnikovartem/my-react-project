const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 6.8,
  },
];

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

console.log(totalRating);

const averageRating = totalRating / books.length;
console.log(averageRating); // 8
