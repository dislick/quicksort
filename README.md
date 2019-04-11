# Quicksort

Today (2019-04-07) while being sick I realized I have never implemented Quicksort, even though having studied all _sorts_ of sorting algorithms. The goal of this purely educational repository is to implement a heavily annotated Quicksort in TypeScript.

## Introduction

> Quicksort (sometimes called partition-exchange sort) is an O(n log n) efficient sorting algorithm [...]. Developed by British computer scientist Tony Hoare in 1959 and published in 1961 it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

> In efficient implementations it is not a stable sort, meaning that the relative order of equal sort items is not preserved. Quicksort can operate in-place on an array, requiring small additional amounts of memory to perform the sorting.

[Wikipedia](https://en.wikipedia.org/wiki/Quicksort)

### Time Complexity

| Behaviour  | Performance  |
| ---------- | ------------ |
| Worst-case | `O(n^2)`     |
| Best-case  | `O(n log n)` |
| Average    | `O(n log n)` |

## Implementation

I am using the [Hoare partition scheme](https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme). The `src/quicksort.ts` source file shows the complete implementation.

Run the following commands to see the algorithm in action:

```bash
npm install
npm run start:dev
```

```
Before:   [ 4, 21, 8, 17, 12, 10, 1, 6, 25, 12 ]
Duration: 0.187ms
After:    [ 1, 4, 6, 8, 10, 12, 12, 17, 21, 25 ]

Array.prototype.sort() x 3,622 ops/sec ±0.58% (89 runs sampled)
Quicksort x 10,092 ops/sec ±0.59% (88 runs sampled)
```

The benchmark sorts a randomly shuffled array of 1000 numbers between 0 and 99999 using [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) and our Quicksort implementation. On Node.js v10 Quicksort outperforms the built-in sort by a factor of roughly 2.8x. Please note that the implementation used in this repository is not a stable sort.

## Tests

The test suite is stared with `npm test` or `npm run test:watch`. A code coverage report can be generated using `npm run test:cov`. Coverage is at 100%.
