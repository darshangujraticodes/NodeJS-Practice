// here we are exporting individual function similar too react
// we will import this export function and destructure them

export const add = (a, b) => {
  return a + b;
};

export const sub = (a, b) => {
  if (a > b) return a - b;
  return b - a;
};

export const mul = (a, b) => {
  return a * b;
};

export const div = (a, b) => {
  if (a > b) return a / b;
  return b / a;
};

export const power = (a, b) => {
  return a ** b;
};
