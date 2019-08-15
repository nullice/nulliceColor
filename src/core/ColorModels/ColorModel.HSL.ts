import IColorModel, { setColorSpace } from "./ColorModel"
import { IObjectHSL, IObjectRGB } from "../core.const"
import HSL_to_RGB from "../Converters/HSL_to_RGB"
import RGB_to_HSL from "../Converters/RGB_to_HSL"

let ColorModel_HSL: IColorModel<IObjectHSL> = {
    outputColor(color: any) {
        return {
            h: color.h,
            s: color.s,
            l: color.l
        }
    },

    inputColor(color: any, input: IObjectHSL) {
        color.h = input.h
        color.s = input.s
        color.l = input.l
        return color
    },

    isMatchedColor(input: any) {
        if (input.h == undefined) return false
        if (input.s == undefined) return false
        if (input.l == undefined) return false
        return true
    },

    toRGB(color: any) {
        let ob = HSL_to_RGB(color)
        setColorSpace(ob, color.colorSpace)
        return ob
    },

    fromRGB(color: any, rgb: IObjectRGB) {
        RGB_to_HSL(rgb, color)
        return color
    },

    toJSON() {
        return "HSL"
    },
    toString() {
        return "HSL"
    }
}

export default ColorModel_HSL
