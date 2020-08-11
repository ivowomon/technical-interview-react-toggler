const isNumberPrime = (number) => {
  if (number < 1) return false;
  for (let divider = 2; divider < number / 2; divider++) {
    if (number % divider === 0) return false;
  }
  return true;
};

const tests = [
  -66,
  -10,
  -25,
  -11,
  -13,
  -3,
  -2,
  -2,
  -1,
  0,
  1,
  2,
  3,
  13,
  11,
  25,
  66,
  10
];

document.footer.innerHTML = tests
  .map((number) => {
    const log = isNumberPrime(number)
      ? `Is Prime: ${number}`
      : `Is not Prime: ${number}`;
    console.log(log);

    return log;
  })
  .join("<br/>");
