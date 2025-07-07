function getExtremeScores(scores) {
  const best = Math.max(...scores);
  const wrost = Math.min(...scores);
  const total = {
    best,
    wrost,
  };
  return total;
}

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
