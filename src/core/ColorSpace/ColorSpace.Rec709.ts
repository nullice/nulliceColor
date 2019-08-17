import IColorSpace, { forNaN } from "./ColorSpace"
import { ReferencePrimaryColor, ReferenceWhite } from "../Reference/ReferencePoints"

const GAMMA = 2.222
const GAMMA_RECI = 0.450045 //  1/GAMMA

let Rec709Config = {
    WHITE_POINT: [0.96422, 1.0, 0.82521],
    R_POINT: [0.436, 0.222, 0.014],
    G_POINT: [0.385, 0.717, 0.097],
    B_POINT: [0.143, 0.061, 0.714]
}

// Gamma type3 params
const a = 0.91
const b = 0.09
const c = 0.222
const d = 0.081
const iB = Number.parseFloat((b / a).toFixed(5))
const iA = Number.parseFloat((1 / a).toFixed(5))
const iC = Number.parseFloat((1 / c).toFixed(5))
const iD = Number.parseFloat((d * c).toFixed(5))

let ColorSpace_Rec709: IColorSpace = {
    name: "Rec709",

    enGamma(value: number): number {
        if (value >= iD) {
            return forNaN(iA * Math.pow(value, GAMMA_RECI) - iB)
        }
        return forNaN(value * iC)
    },

    deGamma(value: number): number {
        if (value >= d) {
            return forNaN(Math.pow(a * value + b, GAMMA))
        }
        return forNaN(value * c)
    },

    WHITE_POINT: ReferenceWhite.D50,

    R_POINT: [0.436, 0.222, 0.014],
    G_POINT: [0.385, 0.717, 0.097],
    B_POINT: [0.143, 0.061, 0.714],

    // prettier-ignore
    RGB2XYZ_MATRIX: [
        0.43626, 0.38492, 0.14304,
        0.22213, 0.71685, 0.06102,
        0.01401, 0.09698, 0.71422
    ],
    // prettier-ignore
    XYZ2RGB_MATRIX: [
        3.13002, -1.61455, -0.48894,
        -0.97595, 1.91472, 0.03188,
        0.07113, -0.22832, 1.40539],

    toString(): string {
        return this.name
    },

    toJSON(): string {
        return this.name
    }
}

export default ColorSpace_Rec709
