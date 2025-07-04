function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  const array = [];
  const keys = Object.keys(products);

  for (const key of keys) {
    if (key === propName) {
      return key ? array.push(key.propName) : [];
    }
  }
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("category"));
