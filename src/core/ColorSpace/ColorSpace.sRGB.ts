import IColorSpace, { forNaN } from "./ColorSpace"
import { ReferencePrimaryColor, ReferenceWhite } from "../Reference/ReferencePoints"

const GAMMA = 2.4
const GAMMA_RECI = 0.41666667 //  1/GAMMA

let ColorSpace_sRGB: IColorSpace = {
    name: "sRGB",

    enGamma(value: number): number {
        if (value > 0.0031308 /*0.0031306684425005883*/) {
            return 1.055 * Math.pow(value, GAMMA_RECI) - 0.055
        }
        return forNaN(12.92 * value)
    },

    deGamma(value: number): number {
        if (value < 0.04045) {
            return forNaN(value / 12.92)
        }
        return forNaN(Math.pow((value + 0.055) / 1.055, GAMMA))
    },

    WHITE_POINT: ReferenceWhite.D50,
    R_POINT: [0.436, 0.222, 0.014],
    G_POINT: [0.385, 0.717, 0.097],
    B_POINT: [0.143, 0.061, 0.714],

    // prettier-ignore
    RGB2XYZ_MATRIX:  [
        0.43626, 0.38492, 0.14304,
        0.22213, 0.71685, 0.06102,
        0.01401, 0.09698, 0.71422],
    // prettier-ignore
    XYZ2RGB_MATRIX:  [
        3.13002, -1.61455, -0.48894,
        -0.97595, 1.91472, 0.03188,
        0.07113, -0.22832, 1.40539],

    toString(): string {
        return "sRGB"
    },

    toJSON(): string {
        return "sRGB"
    }
}

export default ColorSpace_sRGB
