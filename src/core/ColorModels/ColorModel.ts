/**
 * 一个 ColorModel （色彩模型）决定 2 件事：
 *      1. 有哪些属性
 *      2. 如何与 RGB 色彩模型互相转换
 */
import { IColorDataObject, IObjectRGB } from "../core.const"
import any = jasmine.any

export default interface IColorModel<TColorObject extends IColorDataObject> {
    // 1. 决定此色彩模型的色彩属性：

    // 输出包含此色彩模型色彩属性的对象
    outputColor: (color: any) => TColorObject
    // 从输入的对象中提取此色彩模型需要的属性(input => color)
    inputColor: (color: TColorObject, input: any) => TColorObject
    // 输入的对象是匹配此色彩模型的对象
    isMatchedColor: (input: any) => boolean

    // 2.决定此色彩模型到 RGB 的转换方法：

    /**
     * 从 RGB 转换到此色彩模型，把此色彩模型的属性写入指定对象
     * @param color 用来保存色彩属性的对象
     * @param input 输入的 RGB 色彩对象
     * @returns {any}
     */
    fromRGB: (color: TColorObject, input: IObjectRGB) => TColorObject

    /**
     * 把此色彩模型的对象转换得到 RGB 对象
     * @param color 输入的此色彩模型的对象
     * @returns {any}
     */
    toRGB: (color: TColorObject) => IObjectRGB

    toJSON?: () => string
    toString?: () => string
}

export function setColorSpace(color: any, colorSpace: any) {
    if (!colorSpace) return
    Object.defineProperty(color, "colorSpace", {
        value: colorSpace,
        enumerable: false,
        writable: true
    })
}
