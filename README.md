# Quicksort

Today (2019-04-07) while being sick I realized I have never implemented Quicksort, even though having studied all _sorts_ of sorting algorithms. The goal of this purely educational repository is to implement a heavily annotated Quicksort in TypeScript.

## Introduction

> Quicksort (sometimes called partition-exchange sort) is an O(n log n) efficient sorting algorithm [...]. Developed by British computer scientist Tony Hoare in 1959 and published in 1961 it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

> In efficient implementations it is not a stable sort, meaning that the relative order of equal sort items is not preserved. Quicksort can operate in-place on an array, requiring small additional amounts of memory to perform the sorting.

[Source](https://en.wikipedia.org/wiki/Quicksort)

### Complexity

| Class      | Performance  |
| ---------- | ------------ |
| Worst-case | `O(n^2)`     |
| Best-case  | `O(n log n)` |
| Average    | `O(n log n)` |

## Implementation

We are using the [Hoare partition scheme](https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme). Have a look at the `src/quicksort.ts` source file to see the complete implementation.

Run the following commands to see the algorithm in action:

```bash
npm install
npm run start:dev
```

```
Before:   [ 36, 12, 39, 30, 42, 19, 4, 37, 47, 33 ]
Duration: 0.195ms
After:    [ 4, 12, 19, 30, 33, 36, 37, 39, 42, 47 ]
```
