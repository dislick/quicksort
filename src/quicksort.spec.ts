import { quicksort } from './quicksort';

describe('Quicksort', () => {
  it('should sort an array of randomly shuffled elements', () => {
    const values = [41, 38, 38, 4, 23, 34, 20, 35, 3, 22];
    quicksort(values);
    expect(values).toEqual([3, 4, 20, 22, 23, 34, 35, 38, 38, 41]);
  });

  it('should not fail on an array with 0 elements', () => {
    const values: number[] = [];
    quicksort(values);
    expect(values).toEqual([]);
  });

  it('should not fail on an array with 1 element', () => {
    const values = [1];
    quicksort(values);
    expect(values).toEqual([1]);
  });

  it('should not fail on an array with all equal elements', () => {
    const values = [5, 5, 5, 5, 5];
    quicksort(values);
    expect(values).toEqual([5, 5, 5, 5, 5]);
  });

  it('should not do anything to an already sorted array', () => {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    quicksort(values);
    expect(values).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should sort an array that is in reverse order', () => {
    const values = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    quicksort(values);
    expect(values).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
