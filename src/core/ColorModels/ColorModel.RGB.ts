import IColorModel, { setColorSpace } from "./ColorModel"
import { IObjectRGB } from "../core.const"

let ColorModel_RGB: IColorModel<IObjectRGB> = {
    outputColor(color: any) {
        return {
            r: color.r,
            g: color.g,
            b: color.b
        }
    },

    inputColor(color: IObjectRGB, input: any) {
        color.r = input.r
        color.g = input.g
        color.b = input.b
        return color
    },

    isMatchedColor(input: any) {
        if (input.r == undefined) return false
        if (input.g == undefined) return false
        if (input.b == undefined) return false
        return true
    },

    toRGB(color: any) {
        let ob = {
            r: color.r,
            g: color.g,
            b: color.b
        }
        setColorSpace(ob, color.colorSpace)
        return ob
    },

    fromRGB(color: any, rgb: IObjectRGB) {
        color.r = rgb.r
        color.g = rgb.g
        color.b = rgb.b
        return color
    },

    toJSON() {
        return "RGB"
    },

    toString() {
        return "RGB"
    }
}

export default ColorModel_RGB
