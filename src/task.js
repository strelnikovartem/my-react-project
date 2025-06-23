function getFileName(file) {
  const index = file.indexOf(".");
  return index === -1 ? file : file.slice(0, index);
}

console.log(getFileName("styles.css"));
console.log(getFileName("styles.css"));
console.log(getFileName("app"));
