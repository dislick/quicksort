import { quicksort } from './quicksort';
import { randomValue } from './random';

let list: number[] = [];
for (let i = 0; i < 10; i++) {
  list[i] = randomValue(0, 25);
}

console.log(list);

quicksort(list);

console.log(list);

let sorted = true;
for (let i = 0; i < list.length - 1; i++) {
  if (list[i] > list[i + 1]) {
    sorted = false;
  }
}
console.log(sorted);
