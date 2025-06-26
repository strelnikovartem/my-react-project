function getLastElementMeta(array) {
  // const index = array.length;
  // console.log(index);
  return [array.length - 1, array[array.length - 1]];
}

console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
console.log(getLastElementMeta(["apple", "peach", "pear"]));
console.log(getLastElementMeta(["apple"]));
