import { quicksort } from './quicksort';
import { randomValue } from './random';
import * as Benchmark from 'benchmark';

let list: number[] = [];

const fill = (amount: number, min: number, max: number) => {
  for (let i = 0; i < amount; i++) {
    list[i] = randomValue(min, max);
  }
};

new Benchmark.Suite()
  .add('Array.prototype.sort()', () => {
    fill(1000, 0, 99999);
    list.sort();
  })
  .add('Quicksort', () => {
    fill(1000, 0, 99999);
    quicksort(list);
  })
  .on('cycle', function(event: any) {
    console.log(String(event.target));
  })
  .run({ async: true });

fill(10, 0, 25);

console.log('Before:  ', list);
console.time('Duration');
quicksort(list);
console.timeEnd('Duration');
console.log('After:   ', list, '\n');
