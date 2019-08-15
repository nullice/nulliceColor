import IColorModel, { setColorSpace } from "./ColorModel"
import { IObjectHSV, IObjectRGB } from "../core.const"
import HSV_to_RGB from "../Converters/HSV_to_RGB"
import RGB_to_HSV from "../Converters/RGB_to_HSV"
import HSL_to_RGB from "../Converters/HSL_to_RGB"

let ColorModel_HSV: IColorModel<IObjectHSV> = {
    outputColor(color: any) {
        return {
            h: color.h,
            s: color.s,
            v: color.v
        }
    },
    inputColor(color: any, input: IObjectHSV) {
        color.h = input.h
        color.s = input.s
        // hsv 别名 hsb
        color.v = input.v !== undefined ? input.v : (<any>input).b
        return color
    },

    isMatchedColor(input: any) {
        if (input.h == undefined) return false
        if (input.s == undefined) return false
        if (input.v == undefined && input.b == undefined) return false
        return true
    },

    toRGB(color: any) {
        let ob = HSV_to_RGB(color)
        setColorSpace(ob, color.colorSpace)
        return ob
    },

    fromRGB(color: any, rgb: IObjectRGB) {
        RGB_to_HSV(rgb, color)
        return color
    },

    toJSON() {
        return "HSV"
    },
    toString() {
        return "HSV"
    }
}

export default ColorModel_HSV
