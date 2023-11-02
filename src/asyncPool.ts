import { isEqual } from "lodash-es";

//   /* 缓存resolve */
//   const promiseArr: any = [];
//   /* 当前的请求数量 */
//   let requestCount = 0;
//   /* 执行下一个请求 */
//   const execNext = async (uid: string) => {
//     try {
//       requestCount++;
//       return await fn(uid);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       requestCount--;
//       promiseArr.length && promiseArr.shift()(); // 执行下一个请求
//     }
//   };

//   return async (uid: string = "1") => {
//     if (requestCount < max) {
//       return execNext(uid);
//     } else {
//       /* 生成一个 pending 状态的 promise，等待前面的请求完成后执行 */
//       return new Promise((resolve) => promiseArr.push(resolve)).then(() => {
//         execNext(uid);
//       });
//     }
//   };
// };



// 核心用户请求(异步请求)
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

let count = 0;
const taskQueue: { resolve: any; uid: string }[] = [];
/**
 * @param uid uid
 * @param max 最多并发请求数量
 */
export const requestUserProfile = (uid = "1", max = 4) => {
  /* 取任务 */
  const pullTask = () => {
    if (taskQueue.length === 0) {
      return;
    }
    if (count >= max) {
      return;
    }
    count++;
    const { resolve, uid } = taskQueue.shift() as { resolve: any; uid: string };
    resolve(runTask(uid));
  };

  /* 跑任务 */
  const runTask = (id) => {
    const promise = requestProfile(id);
    promise.then(() => {
      count--;
      pullTask();

    });
    return promise;
  };

  return new Promise((resolve) => {
    /* 推送任务，全部进去 */
    taskQueue.push({ resolve, uid });
    if (count < max) {
      count++;
      const { resolve, uid } = taskQueue.shift() as { resolve: any; uid: string };

      resolve(runTask(uid));
    }
  });
};
/**
 * 以下为测试用例，无需修改
 */
export default async () => {
  try {
    const star = Date.now();
    await Promise.all([
      requestUserProfile("1"),
      requestUserProfile("2"),
      requestUserProfile("3"),
      requestUserProfile("4"),
      requestUserProfile("5"),
      requestUserProfile("6"),
      requestUserProfile("7"),
      requestUserProfile("8"),
      requestUserProfile("9"),
      requestUserProfile("10"),
      requestUserProfile("11"),
      requestUserProfile("12"),
      requestUserProfile("13"),
      requestUserProfile("14"),
      requestUserProfile("15"),
      requestUserProfile("16"),
      requestUserProfile("17"),
      requestUserProfile("18"),
    ]).then((result) => {
      console.log(Date.now() - star, 195);
      // if (Date.now() - star < 2000 || Date.now() - star >= 3000) {
      //   throw new Error("Wrong answer");
      // }
      console.log(result, 183);
      if (
        !isEqual(result, [
          {
            uid: "1",
            nick: "nick-1",
            age: "18",
          },
          {
            uid: "2",
            nick: "nick-2",
            age: "18",
          },
          {
            uid: "3",
            nick: "nick-3",
            age: "18",
          },
          {
            uid: "1",
            nick: "nick-1",
            age: "18",
          },
        ])
      ) {
        throw new Error("Wrong answer");
      }
    });

    return _requestTime === 3;
  } catch (err) {
    console.warn("测试运行失败");
    console.error(err);
    return false;
  }
};
