import IColorModel, { setColorSpace } from "./ColorModel"
import { IObjectHWB, IObjectRGB } from "../core.const"
import HWB_to_RGB from "../Converters/HWB_to_RGB"
import RGB_to_HWB from "../Converters/RGB_to_HWB"
import HSV_to_RGB from "../Converters/HSV_to_RGB"

let ColorModel_HWB: IColorModel<IObjectHWB> = {
    outputColor(color: any) {
        return {
            h: color.h,
            w: color.w,
            b: color.b
        }
    },
    inputColor(color: any, input: IObjectHWB) {
        color.h = input.h
        color.w = input.w
        color.b = input.b
        return color
    },

    isMatchedColor(input: any) {
        if (input.h == undefined) return false
        if (input.w == undefined) return false
        if (input.b == undefined) return false
        return true
    },

    toRGB(color: any) {
        let ob = HWB_to_RGB(color)
        setColorSpace(ob, color.colorSpace)
        return ob
    },

    fromRGB(color: any, rgb: IObjectRGB) {
        RGB_to_HWB(rgb, color)
        return color
    },

    toJSON() {
        return "HWB"
    },
    toString() {
        return "HWB"
    }
}

export default ColorModel_HWB
