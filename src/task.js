const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((item, times) => {
  return item + times;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

console.log(averagePlayTime);
