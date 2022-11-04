import { swap } from '../helperFunctions/swap';

function getBubbleSortAnimations(arr = []) {
  const arrCopy = [...arr];
  const animations = [];

  for (let i = 0; i < arr.length-1; i++) {
    let wasSwap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      animations.push({ type: 'select', data: [j, j + 1] });
      if (arrCopy[j] > arrCopy[j + 1]) {
        swap(arrCopy, j, j + 1);
        wasSwap = true;
        animations.push({ type: 'swap', data: [j, j + 1], arr: [...arrCopy] });
      }
    }
    if(!wasSwap) break;
  }
  return animations;
}

export default getBubbleSortAnimations;
