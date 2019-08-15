import { ArrayXYZ, IObjectLab } from "../core.const"
import util from "./../../util/util"
import { ReferenceWhite } from "../Reference/ReferencePoints"

// L * a * b *
// 这是转换 XYZ 到 LAB 模型的方法，当白点为 D50 时，为普遍使用的 Lab（L*a*b*）

/**
 * 转换 XYZ 数组到 Lab 对象
 * @param XYZ
 * @param whitePoint
 * @constructor
 */
function XYZArray_to_LAB(XYZ: ArrayXYZ, whitePoint: number[] = ReferenceWhite.D50, out?: any): IObjectLab {
    if (out === undefined) out = {}

    let ε = 0.00885645167904 // 6^3/29^3
    let κ = 903.2962962962963 // 29^3/3^3

    let xyz = XYZ.map((value, i) => value / whitePoint[i])

    let f = xyz.map(value => (value > ε ? Math.cbrt(value) : (κ * value + 16) / 116))

    out.L = 116 * f[1] - 16 // L
    out.a = 500 * (f[0] - f[1]) // a
    out.b = 200 * (f[1] - f[2]) // b

    return out
}

export default XYZArray_to_LAB
