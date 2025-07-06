const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;

    for (const item of this.potions) {
      totalPrice += item.price;
    }
    return totalPrice;
  },
};

console.log(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
atTheOldToad.addPotion({ name: "Power potion", price: 270 });
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.getTotalPrice());
