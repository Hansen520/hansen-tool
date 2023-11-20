export default class Storage {
  /**
   * @description 设置本地存储
   * @param {string} key
   * @return {*}
   */
  static setStorage = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  /**
   * @description 获取本地存储
   * @param {string} key
   * @return {*}
   */
  static getStorage = (key: string) => {
    const value = window.localStorage.getItem(key);
    try {
      if (value && value != "") {
        return JSON.parse(value);
      }
    } catch (error) {
      return value;
    }
  };
  /**
   * @description 更新本地存储
   * @param {string} key
   * @return {*}
   */
  static updateStorage = (key: string, newValue: any) => {
    try {
      const oldValue = Storage.getStorage(key);
      const _newValue = typeof newValue === "string" ? newValue : Object.assign({}, oldValue, newValue);
      Storage.setStorage(key, _newValue);
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
