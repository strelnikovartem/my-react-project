// ✅ Логічно й синтаксично згруповані сутності
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Це метод об'єкта
  getBooks() {
    return "Returning all books";
  },
  // Це метод об'єкта
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
};

// Виклики методів
bookShelf.getBooks(); // поверне "Returning all books"
bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"
