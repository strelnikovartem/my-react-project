function checkStorage(storage, item) {
  const normItem = item.toLowerCase();
  for (let i = 0; i < storage.length; i++) {
    if (storage.includes(normItem)) {
      return `${normItem} is available to order!`;
    }
    return `Sorry! We are out of stock!`;
  }
}

console.log(checkStorage(["apple", "plum", "pear"], "pLum"));
console.log(checkStorage(["apple", "plum", "pear"], "orange"));
console.log(checkStorage(["apple", "plum", "pear"], "par"));
