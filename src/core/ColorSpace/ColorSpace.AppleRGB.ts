import IColorSpace, { forNaN } from "./ColorSpace"
import { ReferencePrimaryColor, ReferenceWhite } from "../Reference/ReferencePoints"

const GAMMA = 1.801
const GAMMA_RECI = 0.55525 //  1/GAMMA

let AppleRGBConfig = {
    WHITE_POINT: [0.96422, 1.0, 0.82521],
    R_POINT: [0.476, 0.255, 0.018],
    G_POINT: [0.34, 0.673, 0.113],
    B_POINT: [0.149, 0.072, 0.693]
}

let ColorSpace_AppleRGB: IColorSpace = {
    name: "AppleRGB",
    enGamma(value: number): number {
        return forNaN(Math.pow(value, GAMMA_RECI))
    },

    deGamma(value: number): number {
        return forNaN(Math.pow(value, GAMMA))
    },

    WHITE_POINT: ReferenceWhite.D50,
    R_POINT: [0.61, 0.311, 0.019],
    G_POINT: [0.205, 0.626, 0.061],
    B_POINT: [0.149, 0.063, 0.745],

    // prettier-ignore
    RGB2XYZ_MATRIX:[
        0.47467, 0.3403, 0.14925,
        0.25429, 0.67359, 0.07212,
        0.01795, 0.1131, 0.69416
    ],
    // prettier-ignore
    XYZ2RGB_MATRIX: [
        2.85471, -1.36292, -0.47218,
        -1.08878, 2.03075, 0.02311,
        0.10358, -0.29563, 1.44903
    ],

    toString(): string {
        return this.name
    },

    toJSON(): string {
        return this.name
    }
}

export default ColorSpace_AppleRGB
