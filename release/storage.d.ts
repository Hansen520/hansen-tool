export default class Storage {
    /**
     * @description 设置本地存储
     * @param {string} key
     * @return {*}
     */
    static setStorage: (key: string, value: any) => void;
    /**
     * @description 获取本地存储
     * @param {string} key
     * @return {*}
     */
    static getStorage: (key: string) => any;
    /**
     * @description 更新本地存储
     * @param {string} key
     * @return {*}
     */
    static updateStorage: (key: string, newValue: any) => void;
    /**
     * @description 移除某个本地存储
     * @param {string} key
     * @return {*}
     */
    static removeStorage: (key: string) => void;
    /**
     * @description 清空本地存储
     * @return {*}
     */
    static clearStorage: () => void;
}
//# sourceMappingURL=storage.d.ts.map