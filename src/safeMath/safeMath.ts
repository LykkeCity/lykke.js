import Big from 'big.js';
import BigNumberModel from './bigNumberModel';

export const mul = (term1: number | string, term2: number | string) => {
  return getBigNumber(term1).multiply(term2);
};

export const div = (term1: number | string, term2: number | string) => {
  return getBigNumber(term1).divide(term2);
};

export const add = (term1: number | string, term2: number | string) => {
  return getBigNumber(term1).plus(term2);
};

export const sub = (term1: number | string, term2: number | string) => {
  return getBigNumber(term1).minus(term2);
};

export const ceil = (value: number, precision: number) => {
  value = Number.isFinite(value) ? value : 0;
  const factor = Math.pow(10, precision);
  return Math.ceil(new Big(value).times(factor).valueOf()) / factor;
};

export const floor = (value: number, precision: number) => {
  value = Number.isFinite(value) ? value : 0;
  const factor = Math.pow(10, precision);
  return Math.floor(new Big(value).times(factor).valueOf()) / factor;
};

export const toFixed = (value: number | string, accuracy: number) => {
  return getBigNumber(value)
    .toFixed(accuracy)
    .valueOf();
};

export const getPercentsOf = (
  percents: number,
  value: number,
  accuracy: number
) => floor((percents / 100) * value, accuracy);

const getBigNumber = (value: number | string) => {
  return new BigNumberModel(value);
};
