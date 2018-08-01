export const checkForTrailingZero = (value: string): string => {
  const notFractional = value.search(/\.|,/) === -1;
  if (notFractional) {
    return value;
  }
  const indexOfZero = value.search(/0+$/);
  const zeroesQuantity =
    value[indexOfZero - 1] === ',' || value[indexOfZero - 1] === '.' ? 2 : 1;
  return indexOfZero !== -1
    ? value.slice(0, indexOfZero + zeroesQuantity)
    : value;
};

export const formatNumber = (replacer: any) => (
  value: number,
  accuracy: number,
  options?: object
) => {
  options = {
    maximumFractionDigits: accuracy,
    minimumFractionDigits: accuracy,
    ...options
  };

  if (!Number.isFinite(value)) {
    if (typeof replacer === 'string') {
      return replacer;
    }
    value = replacer;
  }

  const result = value.toLocaleString(undefined, options);
  return checkForTrailingZero(result);
};
