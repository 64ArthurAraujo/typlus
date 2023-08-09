export * from "../index";

declare global {
  interface Array<T> {
    last(): T;
    first(): T;

    isEmpty(): boolean;

    /** Removes the first element of the array and returns itself */
    removeFirst(): Array<T>;

    /** Selects a random element of the array */
    selectRandom(): T;

    /** Returns the array without duplicated values */
    withoutDuplicates(): Array<T>;

    without(element: T): Array<T>;
  }

  interface Number {
    /** Useful when checking the length of an array (eg. 'if (array.length.is(1))' ) */
    is(num: number): boolean;
  }
}