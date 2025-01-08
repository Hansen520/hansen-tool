/*
 * @Date: 2023-11-20 13:25:44
 * @Description: 对于localStorage的封装，方便使用，一般来说，我们存储的值一般为普通字符串类型和JSON对象类型，这是比较常用的，后续有新的需求在做新的更新和更改
 */
export default class Storage {
  /**
   * @description 设置本地存储，设置为string类型或者为转换后的的JSON
   * @param {string} key
   * @return {*}
   */
  static setStorage = (key: string, value: Object | string) => {
    /*
      我们为啥要判断value的类型呢，在我们的应用场景中，token的如果统一使用了JSON.stringify之后，就会给token带上双引号, 如"【token】"，前端就要额外的去处理，所有加了判断
    */
    if (typeof value === "object") {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      window.localStorage.setItem(key, value);
    }
  };

  /**
   * @description 获取本地存储
   * @param {string} key
   * @return {*}
   */
  static getStorage = (key: string) => {
    const value = window.localStorage.getItem(key);
    try {
      if (value && value !== "" && typeof JSON.parse(value) === "object") {
        return JSON.parse(value);
      } else {
        return value;
      }
    } catch (error) {
      return value;
    }
  };

  /**
   * @description 更新本地存储，如果是字符串直接更新，如果是对象，则合并
   * @param {string} key
   * @return {*}
   */
  static updateStorage = (key: string, newValue: string | Object) => {
    try {
      const oldValue = Storage.getStorage(key);
      if (oldValue && newValue && newValue !== "" && typeof newValue === "object") {
        debugger
        // 我们假设用户输入的新的值为对象，那么原先旧的值我们也预判为对象，直接按照对象来处理进行合并
        const _newValue = Object.assign({}, oldValue, newValue);
        Storage.setStorage(key, JSON.stringify(_newValue));
      } else {
        Storage.setStorage(key, newValue);
      }
    } catch (error) {
      throw error;
    }
  };
  /**
   * @description 移除某个本地存储
   * @param {string} key
   * @return {*}
   */
  static removeStorage = (key: string) => {
    window.localStorage.removeItem(key);
  };
  /**
   * @description 清空本地存储
   * @return {*}
   */
  static clearStorage = () => {
    window.localStorage.clear();
  };
}
