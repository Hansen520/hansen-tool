const assertDelay = (delay: number): void => {
  if (!Number.isFinite(delay) || delay < 0 || delay > 2_147_483_647) {
    throw new RangeError("delay must be between 0 and 2147483647 milliseconds");
  }
};

export const sleepFn = (time = 500, callback?: () => void): Promise<true> => {
  assertDelay(time);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        callback?.();
        resolve(true);
      } catch (error) {
        reject(error);
      }
    }, time);
  });
};

export const sleep = (milliseconds = 500): Promise<void> => {
  assertDelay(milliseconds);
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
