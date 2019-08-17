import IColorSpace, { forNaN } from "./ColorSpace"
import { ReferencePrimaryColor, ReferenceWhite } from "../Reference/ReferencePoints"

const GAMMA = 2.222
const GAMMA_RECI = 0.450045 //  1/GAMMA

let Rec2020Config = {
    WHITE_POINT: [0.96422, 1.0, 0.82521],
    R_POINT: [0.673, 0.279, -0.002],
    G_POINT: [0.166, 0.675, 0.03],
    B_POINT: [0.125, 0.046, 0.797]
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

let ColorSpace_Rec2020: IColorSpace = {
    name: "Rec2020",
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
    R_POINT: [0.673, 0.279, -0.002],
    G_POINT: [0.166, 0.675, 0.03],
    B_POINT: [0.125, 0.046, 0.797],

    // prettier-ignore
    RGB2XYZ_MATRIX: [
        0.67321, 0.16598, 0.12503,
        0.27909, 0.6749, 0.04601,
        -0.002, 0.03, 0.79722],
    // prettier-ignore
    XYZ2RGB_MATRIX: [
        1.64843, -0.39492, -0.23574,
        -0.6837, 1.64931, 0.01204,
        0.02986, -0.06305, 1.25332
    ],

    toString(): string {
        return this.name
    },

    toJSON(): string {
        return this.name
    }
}

export default ColorSpace_Rec2020
