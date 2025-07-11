const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

const sortedByAuthorName = books.toSorted((a, b) =>
  a.author.localeCompare(b.author)
);

const sortedByReversedAuthorName = books.toSorted((a, b) =>
  b.author.localeCompare(a.author)
);

const sortedByAscendingRating = books.toSorted((a, b) => a - b);

const sortedByDescentingRating = books.toSorted((a, b) => b - a);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
