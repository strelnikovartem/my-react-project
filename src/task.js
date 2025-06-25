for (let i = 0; i <= 5; i += 2.5) {
  console.log(i);

  if (i === 5) {
    console.log("Met the number 5, interrupt the execution of the cycle");
    break;
  }
}

console.log("Log after cycle");
