import { dropCube } from './cube';

let currentPosition = 0;

const field = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
const maxCount = field.length - 1;

function nextStep() {
  const firstCube = dropCube(2);
  const secondCube = dropCube(2);
  const sum = currentPosition + firstCube + secondCube;

  if(sum > maxCount) {
    currentPosition = sum - maxCount - 1;
  } else {
    currentPosition = sum;
  }
}
