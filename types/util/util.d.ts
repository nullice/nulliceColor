declare class Util {
    static getValueByKeys(ob: any, keys: string[]): any;
    /**
     * 归一化
     * @param {number} inNumber
     * @param {number} inMin
     * @param {number} inMax
     * @param {number} newMin
     * @param {number} newMax
     * @returns {number}
     */
    static normaliz(inNumber: number, inMin?: number, inMax?: number, newMax?: number): number;
    /**
     * 把一个数按 [0,255] 整数，规则化
     * @param value
     * @return {number}
     */
    static normalInt256(value: number): number;
    static matrixMultiply_33x33(matA: number[], matB: number[]): number[];
    static matrixMultiply_33x30(matA: number[], matB: number[]): number[];
    static matrixInverse_33(mat: number[]): number[];
}
export default Util;
