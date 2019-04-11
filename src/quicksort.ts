/**
 * Quicksort Implementation
 */
export function quicksort(
  array: number[],
  start: number = 0,
  end: number = array.length - 1
) {
  // Exit condition
  if (start >= end) {
    return;
  }

  // Partition the array and get the index of the pivot back
  let index = partition(array, start, end);

  // Sort the left side
  quicksort(array, start, index - 1);

  // Sort the right side
  quicksort(array, index, end);
}

/**
 * Hoare partition scheme implementation:
 * https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme
 *
 * It starts with two indices that move toward each other until they detect a
 * pair of elements that are in the wrong order relative to each other and swaps
 * them. The loop is finished when `left` and `right` meet in the middle.
 */
function partition(array: number[], start: number, end: number): number {
  // First we need to pick a pivot, an element to which we compare all other
  // elements. We take the element in the middle of `array` here.
  let pivot = array[Math.floor((start + end) / 2)];

  // Left and right are the indexes that move toward each other
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

  // `left` is now the index of the pivot element. We need to return it so that
  // the `quicksort()` function can continue recursively partition the array.
  return left;
}

/**
 * Swaps the position of two elements `first` and `second` in an `array`.
 */
function swapElements<T>(array: Array<T>, first: number, second: number): void {
  const temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}
