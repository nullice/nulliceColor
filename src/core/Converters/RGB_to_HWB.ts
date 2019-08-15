// Created by nullice on 2018/08/20 - 18:25

import { IObjectRGB, IObjectHWB } from "../core.const"
import RGB_to_HSV from "./RGB_to_HSV"

/**
 * RGB 对象转换到 HWB 对象
 * @param rgb
 * @param out
 * @constructor
 */
function RGB_to_HWB(rgb: IObjectRGB, out?: any): IObjectHWB {
    let hsv = RGB_to_HSV(rgb)

    let w = Math.round(((100 - hsv.s) * hsv.v) / 100)
    let b = Math.round(100 - hsv.v)

    out.h = hsv.h
    out.w = w
    out.b = b

    return out
}

export default RGB_to_HWB
