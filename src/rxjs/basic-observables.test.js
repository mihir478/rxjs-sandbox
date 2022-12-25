import { from, of } from "rxjs";

describe("Basic Observables", () => {
  describe(of, () => {
    it("should create an observable from its arguments", () => {
      const result = [];

      const observer$ = of(1, 2, 3, 4);
      observer$.subscribe((value) => result.push(value));

      expect(result).toEqual([1, 2, 3, 4]);
    });
  });

  describe(from, () => {
    it("should create an observable", () => {
      const result = [];

      const observer$ = from([1, 2, 3, 4]);
      observer$.subscribe((value) => result.push(value));

      expect(result).toEqual([1, 2, 3, 4]);
    });
  });
});