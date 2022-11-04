const stop = () => {
  // sets a fake timeout to get the highest timeout id and clear all timeouts that come before
  let timeoutId = setTimeout(() => null, 0);
  while (timeoutId >= 0) {
    clearTimeout(timeoutId);
    timeoutId--;
  }
};

export {stop};