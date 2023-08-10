export * from "../index";

declare global {
  interface Array<T> {
    last(): T;
    first(): T;

    isEmpty(): boolean;
    isNotEmpty(): boolean;

    /** Removes the first element of the array and returns itself */
    removeFirst(): Array<T>;

    /** Selects a random element of the array */
    selectRandom(): T;

    /** Returns the array without duplicated values */
    withoutDuplicates(): Array<T>;

    without(element: T): Array<T>;
  }

  interface String {
    /** Checks for the ocurrences of 'string' globally and returns it */
    matchesOf(string: string): RegExpMatchArray | [];
  }
}