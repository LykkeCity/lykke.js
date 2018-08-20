import Big from 'big.js';

class BigNumberModel {
  private bigNumber: Big;
  private calculationResult: string;

  constructor(value: string | number) {
    this.bigNumber = new Big(value);
    this.calculationResult = this.bigNumber.valueOf();
  }

  multiply = (term: number | string) => {
    this.calculationResult = this.bigNumber.mul(term).valueOf();
    return this;
  };

  divide = (term: number | string) => {
    this.calculationResult = this.bigNumber.div(term).valueOf();
    return this;
  };

  plus = (term: number | string) => {
    this.calculationResult = this.bigNumber.plus(term).valueOf();
    return this;
  };

  minus = (decrement: number | string) => {
    this.calculationResult = this.bigNumber.minus(decrement).valueOf();
    return this;
  };

  toFixed = (accuracy: number) => {
    this.calculationResult = this.bigNumber.toFixed(accuracy);
    return this;
  };

  toString = () => {
    return this.calculationResult;
  };

  valueOf = () => {
    return parseFloat(this.calculationResult);
  };
}

export default BigNumberModel;
