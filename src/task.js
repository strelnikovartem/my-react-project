function getLength(array) {
  const stringArray = array.join("");
  return stringArray.length;
}

console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
