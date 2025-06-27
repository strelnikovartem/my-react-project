function transformString(string) {
  const words = string.split(" ");
  console.log(words);
  return words.join("-");
}

console.log(transformString("user_age")); // "user-age"
transformString("price_per_droid"); // "price-per-droid"
