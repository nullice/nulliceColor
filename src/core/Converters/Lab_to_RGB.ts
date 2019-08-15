/**
 * Lab 对象转换为 RGB 对象
 * @param lab
 * @param colorSpace
 * @param out
 * @constructor
 */
import { IObjectLab, IObjectRGB, ArrayXYZ } from "../core.const"
import ColorSpace_sRGB from "../ColorSpace/ColorSpace.sRGB"
import IColorSpace from "../ColorSpace/ColorSpace"
import Lab_to_XYZArray from "./Lab_to_XYZArray"
import { ReferenceWhite } from "../Reference/ReferencePoints"
import { ReferenceAdaptatioMatrixn } from "../Reference/ReferenceMatrix"
import { get_Bradford_AdaptatioMatrixn } from "./TransformMatrix"
import util from "./../../util/util"
import XYZArray_to_RGBArray from "./XYZArray_to_RGBArray"

function Lab_to_RGB(lab: IObjectLab, colorSpace: IColorSpace = ColorSpace_sRGB, out?: any): IObjectRGB {
    if (out === undefined) out = {}
    // Lab to XYZ
    let XYZ = Lab_to_XYZArray(lab)

    // 如果色彩空间的白点不是 Lab 默认的 D50 则进行白点转换
    if (colorSpace.WHITE_POINT !== ReferenceWhite.D50) {
        // D65 使用预计算
        if (colorSpace.WHITE_POINT === ReferenceWhite.D65) {
            XYZ = <ArrayXYZ>util.matrixMultiply_33x30(ReferenceAdaptatioMatrixn.D50_to_D65, XYZ)
        }
        // 计算转换矩阵
        else {
            let adaptatioMat = get_Bradford_AdaptatioMatrixn(colorSpace.WHITE_POINT, ReferenceWhite.D50)
            XYZ = <ArrayXYZ>util.matrixMultiply_33x30(adaptatioMat, XYZ)
        }
    }

    // XYZ to RGB
    let RGBArray = XYZArray_to_RGBArray(XYZ, colorSpace.XYZ2RGB_MATRIX)

    // Gamma 变换，把色彩值的转化为适应人眼的
    out.r = util.normalInt256(colorSpace.enGamma(RGBArray[0]) * 255)
    out.g = util.normalInt256(colorSpace.enGamma(RGBArray[1]) * 255)
    out.b = util.normalInt256(colorSpace.enGamma(RGBArray[2]) * 255)

    return out
}

export default Lab_to_RGB
