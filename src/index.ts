import { quicksort } from './quicksort';
import { randomValue } from './random';

// Generate an array of random values to sort
let list: number[] = [];
for (let i = 0; i < 10; i++) {
  list[i] = randomValue(0, 50);
}

console.log('Before:  ', list);
console.time('Duration');
quicksort(list);
console.timeEnd('Duration');
console.log('After:   ', list);
