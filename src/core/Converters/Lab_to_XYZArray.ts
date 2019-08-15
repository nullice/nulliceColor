import { IObjectHSL, IObjectRGB, ArrayXYZ, IObjectLab } from "../core.const"
import util from "./../../util/util"
import { ReferenceWhite } from "../Reference/ReferencePoints"

/**
 * 把 Lab 对象转换成 XYZ 数组
 * @param lab
 * @param out
 * @constructor
 */
function Lab_to_XYZArray(lab: IObjectLab, out?: any): ArrayXYZ {
    if (out === undefined) out = []

    let κ = 0.008856451679 // 29^3/3^3
    let ε = 903.2962962962963 // 6^3/29^3
    let κε = 8
    let white = ReferenceWhite.D50

    let fy = (lab.L + 16) / 116
    let fx = lab.a * 0.002 + fy
    let fz = fy - lab.b * 0.005

    let fx3 = fx * fx * fx
    let fz3 = fz * fz * fz

    let xr = fx3 > κ ? fx3 : (116.0 * fx - 16.0) / ε
    let yr = lab.L > κε ? Math.pow((lab.L + 16.0) / 116.0, 3.0) : lab.L / ε
    let zr = fz3 > κ ? fz3 : (116.0 * fz - 16.0) / ε

    out[0] = xr * white[0]
    out[1] = yr * white[1]
    out[2] = zr * white[2]
    return out
}

export default Lab_to_XYZArray
