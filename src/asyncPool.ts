/**
 * 多组数据的并发请求
 * @param uid uid
 * @param max 最多并发请求数量
 * @param fn 请求的函数
 * @example requestUserProfile(1, () => {})('226')
 */
export const requestUserProfile = (max: number = 2, fn: (uid: string) => any) => {
  /* 缓存resolve */
  const promiseArr: any = [];
  /* 当前的请求数量 */
  let requestCount = 0;
  /* 执行下一个请求 */
  const execNext = async (uid: string) => {
    try {
      requestCount++;
      return await fn(uid);
    } catch (error) {
      console.error(error);
    } finally {
      requestCount--;
      promiseArr.length && promiseArr.shift()(); // 执行下一个请求
    }
  };

  return async (uid: string = "1") => {
    if (requestCount < max) {
      return execNext(uid);
    } else {
      /* 生成一个 pending 状态的 promise，等待前面的请求完成后执行 */
      return new Promise((resolve) => promiseArr.push(resolve)).then(() => {
        execNext(uid);
      });
    }
  };
};

/**
 * 多组数据的并发请求
 * @param uid uid
 * @param max 最多并发请求数量
 * @param fn 请求的函数
 * @example requestUserProfile(1, () => {})('226')
 */
export const pLimitAsync = (concurrency) => {
  const queue: any = [];
  let activeCount = 0;

  const next = () => {
    activeCount--;

    if (queue.length > 0) {
      queue.shift()();
    }
  };

  const run = async (fn, resolve, ...args) => {
    activeCount++;

    const result = (async () => fn(...args))();

    resolve(result);

    try {
      await result;
    } catch {}

    next();
  };

  const enqueue = (fn, resolve, ...args) => {
    queue.push(run.bind(null, fn, resolve, ...args));

    if (activeCount < concurrency && queue.length > 0) {
      queue.shift()();
    }
  };

  const generator = (fn, ...args) =>
    new Promise((resolve) => {
      enqueue(fn, resolve, ...args);
    });

  return generator;
};

// const limit = pLimitAsync(2);

// function asyncFun(value, delay) {
//     return new Promise((resolve) => {
//         console.log('start ' + value);
//         setTimeout(() => resolve(value), delay);
//     });
// }

// (async function () {
//     const arr = [
//         limit(() => asyncFun('aaa', 2000)),
//         limit(() => asyncFun('bbb', 3000)),
//         limit(() => asyncFun('ccc', 1000)),
//         limit(() => asyncFun('ccc', 1000)),
//         limit(() => asyncFun('ccc', 1000))
//     ];

//     const result = await Promise.all(arr);
//     console.log(result);
// })();

// 核心用户请求
let _requestTime = 0;
const requestProfile = (uid: string) => {
  return Promise.resolve().then(() => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => {
      _requestTime++;
      console.log(_requestTime, 122);
      return {
        uid,
        nick: `nick-${uid}`,
        age: "18",
      };
    });
  });
};
// console.log(requestProfile('1').then((a) => {console.log(a)}));
