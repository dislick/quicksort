export function quicksort(
  array: number[],
  start: number = 0,
  end: number = array.length - 1
) {
  if (start >= end) return;

  let index = partition(array, start, end);

  quicksort(array, start, index - 1);
  quicksort(array, index, end);
}

/**
 * Hoare partition scheme implementation:
 * https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme
 */
function partition(array: number[], start: number, end: number): number {
  let middle = Math.floor((start + end) / 2);
  let pivot = array[middle];
  let left = start;
  let right = end;

  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }

    while (array[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swapElements(array, left, right);
      left++;
      right--;
    }
  }

  return left;
}

function swapElements<T>(array: Array<T>, first: number, second: number): void {
  const temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}
