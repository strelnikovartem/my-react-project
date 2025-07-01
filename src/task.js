const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

console.log(book["owner"]);

console.log(book.title); // "The Last Kingdom"
console.log(book["title"]); // "The Last Kingdom"

console.log(book.genres); // ["historical prose", "adventure"]
console.log(book["genres"]); // ["historical prose", "adventure"]

const propKey = "author";
console.log(book.author); // undefined
console.log(book[propKey]); // "Bernard Cornwell"
