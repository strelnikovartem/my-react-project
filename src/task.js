const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};

console.log(atTheOldToad.getPotions());
atTheOldToad.addPotion("Invisibility");
atTheOldToad.addPotion("Power potion");
console.log(atTheOldToad.getPotions());
console.log();
