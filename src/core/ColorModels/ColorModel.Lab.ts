import IColorModel from "./ColorModel"
import { IObjectLab, IObjectRGB } from "../core.const"

import Lab_to_RGB from "../Converters/Lab_to_RGB"
import RGB_to_Lab from "../Converters/RGB_to_Lab"
import ColorSpace_sRGB from "../ColorSpace/ColorSpace.sRGB"

let ColorModel_Lab: IColorModel<IObjectLab> = {
    outputColor(color: any) {
        return {
            L: color.L,
            a: color.a,
            b: color.b
        }
    },

    inputColor(color: any, input: IObjectLab) {
        color.L = input.L
        color.a = input.a
        color.b = input.b
        return color
    },

    isMatchedColor(input: any) {
        if (input.L == undefined) return false
        if (input.a == undefined) return false
        if (input.b == undefined) return false
        return true
    },

    toRGB(color: any) {
        return Lab_to_RGB(color)
    },

    fromRGB(color: any, rgb: IObjectRGB) {
        let colorSpace = (<any>rgb).colorSpace || ColorSpace_sRGB
        return RGB_to_Lab(rgb, colorSpace, color)
    },

    toJSON() {
        return "Lab"
    },

    toString() {
        return "Lab"
    }
}

export default ColorModel_Lab
