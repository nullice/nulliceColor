import { ArrayXYZ } from "../core.const"
import util from "./../../util/util"

/**
 * 转换 RGB 数组到 XYZ 数组
 * @param {number[]} rgb 归一化（0~1）的 rgb 数组
 * @param {number[]} transformMatrix ColorSpace 提供的 RGB2XYZ 矩阵
 * @returns {number[]}
 * @constructor
 */
function RGBArray_to_XYZArray(rgb: number[], transformMatrix: number[]): ArrayXYZ {
    let XYZArray = <ArrayXYZ>util.matrixMultiply_33x30(transformMatrix, rgb)
    return XYZArray
}

export default RGBArray_to_XYZArray
