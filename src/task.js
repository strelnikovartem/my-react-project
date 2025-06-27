function calculateEngravingPrice(message, pricePerWord) {
  const totalMessage = message.split(" ");
  return totalMessage.length * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
