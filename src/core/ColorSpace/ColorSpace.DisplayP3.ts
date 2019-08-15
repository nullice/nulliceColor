import IColorSpace from "./ColorSpace"
import { ReferencePrimaryColor, ReferenceWhite } from "../Reference/ReferencePoints"

const GAMMA = 2.4
const GAMMA_RECI = 0.41666667 //  1/GAMMA

let DisplayP3Config = {
    WHITE_POINT: [0.96422, 1.0, 0.82521],
    R_POINT: [0.515, 0.241, -0.001],
    G_POINT: [0.291, 0.692, 0.042],
    B_POINT: [0.157, 0.067, 0.784]
}

let ColorSpace_DispalyP3: IColorSpace = {
    name: "DispalyP3",
    enGamma(value: number): number {
        if (value >= 0.00308) {
            return 1.055 * Math.pow(value, GAMMA_RECI) - 0.05486
        }
        return value * 12.987
    },

    deGamma(value: number): number {
        if (value >= 0.04) {
            return Math.pow(0.9478 * value + 0.052, GAMMA)
        }
        return value * 0.077
    },

    WHITE_POINT: ReferenceWhite.D50,
    R_POINT: [0.515, 0.241, -0.001],
    G_POINT: [0.291, 0.692, 0.042],
    B_POINT: [0.157, 0.067, 0.784],

    // prettier-ignore
    RGB2XYZ_MATRIX: [
        0.51647, 0.2907, 0.15705,
        0.24169, 0.69129, 0.06702,
        -0.001, 0.04196, 0.78426
    ],
    // prettier-ignore
    XYZ2RGB_MATRIX: [
        2.39566, -0.98341, -0.3957,
        -0.84223, 1.79984, 0.01485,
        0.04812, -0.09755, 1.27379
    ],

    toString(): string {
        return "sRGB"
    },

    toJSON(): string {
        return "sRGB"
    }
}

export default ColorSpace_DispalyP3
