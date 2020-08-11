export const isNumberPrime = (number) => {
  if (number < 1) return false;
  for (let divider = 2; divider < number / 2; divider++) {
    if (number % divider === 0) return false;
  }
  return true;
};
