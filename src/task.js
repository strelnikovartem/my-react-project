function countClients(clientCounter, maxClients) {
  let counter = clientCounter; // створюємо локальну змінну

  while (counter < maxClients) {
    console.log(counter);
    counter += 1;
  }
}

countClients(18, 25);
