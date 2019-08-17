/**
 * 一个 ColorSpace（色彩空间）决定 3 件事：
 *      1. 如何进行 Gamma 变换（正向+逆向）
 *      2. 如何进行转换到 XYZ （根据白点）
 */
import * as util from "util"
import Util from "../../util/util"
import { get_RGB2XYZ_TransformMatrix } from "../Converters/TransformMatrix"

export default interface IColorSpace {
    name: string
    // 将线性值进行 Gamma 变换
    enGamma: (value: number) => number

    // 还原经过 Gamma 变换的值
    deGamma: (value: number) => number

    // 白点坐标 [X,Y,Z]
    WHITE_POINT: number[]
    // 主红点坐标  [X,Y,Z]
    R_POINT: number[]
    // 主绿点坐标  [X,Y,Z]
    G_POINT: number[]
    // 主蓝点坐标  [X,Y,Z]
    B_POINT: number[]
    // RGB 到 XYZ 的转换矩阵
    RGB2XYZ_MATRIX: number[]
    // XYZ 到 RGB 的转换矩阵
    XYZ2RGB_MATRIX: number[]

    toString(): string
    toJSON(): string
}

export interface IColorSpaceConfig {
    name: string
    /** 白点 */
    WHITE_POINT: [number, number, number]
    /** 红点 */
    R_POINT: [number, number, number]
    /** 绿点 */
    G_POINT: [number, number, number]
    /** 蓝点 */
    B_POINT: [number, number, number]

    deGamma: (value: number) => number
    enGamma: (value: number) => number
}

/**
 * 根据配置创建一个色彩空间
 * @param config
 */
export function creatColorSpace(config: IColorSpaceConfig) {
    let RGB2XYZ_MAT = get_RGB2XYZ_TransformMatrix(config.R_POINT, config.G_POINT, config.B_POINT, config.WHITE_POINT)

    let colorSpace: IColorSpace = {
        name: config.name,
        WHITE_POINT: config.WHITE_POINT,
        R_POINT: config.R_POINT,
        G_POINT: config.G_POINT,
        B_POINT: config.B_POINT,
        enGamma: config.enGamma,
        deGamma: config.deGamma,

        RGB2XYZ_MATRIX: RGB2XYZ_MAT.map(x => parseFloat(x.toFixed(5))),
        XYZ2RGB_MATRIX: Util.matrixInverse_33(RGB2XYZ_MAT).map(x => parseFloat(x.toFixed(5))),

        toString() {
            return config.name
        },
        toJSON() {
            return config.name
        }
    }

    return colorSpace
}

export function forNaN(number: number) {
    if (Number.isNaN(number)) {
        return 0
    } else {
        return number
    }
}
