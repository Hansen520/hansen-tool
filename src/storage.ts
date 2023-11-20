export default class Storage {
  /**
   * @description 设置本地存储
   * @param {string} key
   * @return {*}
   */
  setStorage = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  /**
   * @description 获取本地存储
   * @param {string} key
   * @return {*}
   */
  getStorage = (key: string) => {
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
  update = (key: string, newValue: any) => {
    try {
      const oldValue = this.getStorage(key);
      const _newValue = typeof newValue === "string" ? newValue : Object.assign({}, oldValue, newValue);
      return this.setStorage(key, JSON.stringify(_newValue));
    } catch (error) {
      throw error;
    }
  };
  /**
   * @description 移除某个本地存储
   * @param {string} key
   * @return {*}
   */
  removeStorage = (key: string) => {
    window.localStorage.removeItem(key);
  };
  /**
   * @description 清空本地存储
   * @return {*}
   */
  clearStorage = () => {
    window.localStorage.clear();
  };
}
