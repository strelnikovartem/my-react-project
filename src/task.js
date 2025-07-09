function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, back) {
  return back(pizzaName);
}

console.log(makeMessage("Royal Grand", makePizza));

console.log(makeMessage("Ultracheese", deliverPizza));
