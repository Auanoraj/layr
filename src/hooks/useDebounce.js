export const useDebounce = (fn, delay = 200) => {
  let timerId;

  return (...args) => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn(args);
    }, delay);
  };
};
