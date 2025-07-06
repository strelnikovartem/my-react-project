const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getAvarageRating() {
    let totalRating = 0;

    for (const book of this.books) {
      totalRating += book.rating;
    }
    console.log(this.books.length);
    return totalRating / this.books.length;
  },
};

bookShelf.getAvarageRating(); // 7
