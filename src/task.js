const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const key = Object.keys(apartment);

console.log(key);

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']
