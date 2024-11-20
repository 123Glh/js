function add() {
  let collect = Array.from(arguments);
  let sum = 0;
  for (let i = 0; i < collect.length; i++) {
    sum += collect[i];
  }
  return sum;
}
console.log(add(1, 2, 3, 4));