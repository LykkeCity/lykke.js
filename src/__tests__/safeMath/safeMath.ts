import {
  add,
  ceil,
  div,
  floor,
  getPercentsOf,
  mul,
  sub,
  toFixed
} from '../../safeMath/safeMath';

describe('Test math functions', () => {
  describe('method mul', () => {
    it('should multiply term2 to term1 and return correct value', () => {
      let term1 = 0.1;
      let term2 = 0.2;
      let result = 0.02;
      let stringResult = '0.02';

      expect(mul(term1, term2).valueOf()).toBe(result);
      expect(mul(term1, term2).toString()).toBe(stringResult);

      term1 = 3.12868568;
      term2 = 6.6328244;
      result = 20.752022718234592;
      stringResult = '20.752022718234592';

      expect(mul(term1, term2).valueOf()).toBe(result);
      expect(mul(term1, term2).toString()).toBe(stringResult);
    });
  });

  describe('method div', () => {
    it('should divide term1 to term2 and return correct value', () => {
      let term1 = 0.2;
      let term2 = 0.1;
      let result = 2;

      expect(div(term1, term2).valueOf()).toBe(result);

      term1 = 6.6328244;
      term2 = 3.12868568;
      result = 2.1200034386324162;

      expect(div(term1, term2).valueOf()).toBe(result);
    });
  });

  describe('method add', () => {
    it('should add term2 to term1 and return correct value', () => {
      const term1 = 1111111111;
      const term2 = 0.00000001;
      const result = 1111111111.00000001;
      const stringResult = '1111111111.00000001';

      expect(add(term1, term2).valueOf()).toBe(result);
      expect(add(term1, term2).toString()).toBe(stringResult);
    });
  });

  describe('method sub', () => {
    it('should subtract term1 to term2 and return correct value', () => {
      let term1 = 0.3;
      let term2 = 0.1;
      let result = 0.2;
      let stringResult = '0.2';

      expect(sub(term1, term2).valueOf()).toBe(result);
      expect(sub(term1, term2).toString()).toBe(stringResult);

      term1 = 88.12868568;
      term2 = 86.6328244;
      result = 1.49586128;
      stringResult = '1.49586128';

      expect(sub(term1, term2).valueOf()).toBe(result);
      expect(sub(term1, term2).toString()).toBe(stringResult);
    });
  });

  describe('method ceil', () => {
    it('should return zero for infinite number', () => {
      const precision = 4;
      const num = Infinity;
      expect(ceil(num, precision)).toBe(0);
    });

    it('should cut number and increase last digit', () => {
      let precision = 4;
      let num = 9780.475869985;
      expect(ceil(num, precision)).toBe(9780.4759);

      precision = 2;
      num = 9780.474;
      expect(ceil(num, precision)).toBe(9780.48);
    });
  });

  describe('method floor', () => {
    it('should return zero for infinite number', () => {
      const precision = 4;
      const num = Infinity;
      expect(floor(num, precision)).toBe(0);
    });

    it('should cut number with precision without rounding', () => {
      let precision = 2;
      let num = 9780.47;
      expect(floor(num, precision)).toBe(num);

      precision = 4;
      num = 9780.475869985;
      expect(floor(num, precision)).toBe(9780.4758);
    });
  });

  describe('method toFixed', () => {
    it('should return value with fixed accuracy', () => {
      const value = 234567.8473263;
      const accuracy = 3;
      const result = 234567.847;

      expect(toFixed(value, accuracy)).toBe(result);
    });
  });

  describe('method getPercentsOf', () => {
    it('should calculate percents of value', () => {
      const percents = 20;
      const value = 100;
      const accuracy = 0;
      expect(getPercentsOf(percents, value, accuracy)).toBe(
        floor((percents / 100) * value, accuracy)
      );
    });
  });
});
