import IColorSpace, { forNaN } from "./ColorSpace"
import { ReferencePrimaryColor, ReferenceWhite } from "../Reference/ReferencePoints"

const GAMMA = 1.801
const GAMMA_RECI = 0.55525 //  1/GAMMA

let ColorMatchRGBConfig = {
    WHITE_POINT: [0.96422, 1.0, 0.82521],
    R_POINT: [0.509, 0.275, 0.024],
    G_POINT: [0.321, 0.658, 0.109],
    B_POINT: [0.134, 0.067, 0.692]
}

let ColorSpace_ColorMatchRGB: IColorSpace = {
    name: "ColorMatchRGB",
    enGamma(value: number): number {
        return forNaN(Math.pow(value, GAMMA_RECI))
    },

    deGamma(value: number): number {
        return forNaN(Math.pow(value, GAMMA))
    },

    WHITE_POINT: ReferenceWhite.D50,
    R_POINT: [0.509, 0.275, 0.024],
    G_POINT: [0.321, 0.658, 0.109],
    B_POINT: [0.134, 0.067, 0.692],

    // prettier-ignore
    RGB2XYZ_MATRIX:[
        0.50925, 0.32092, 0.13404,
        0.27514, 0.65784, 0.06702,
        0.02401, 0.10897, 0.69222
    ],
    // prettier-ignore
    XYZ2RGB_MATRIX: [
        2.64383, -1.2246, -0.39339,
        -1.11429, 2.06103, 0.01622,
        0.08371, -0.28198, 1.45571
    ],

    toString(): string {
        return this.name
    },

    toJSON(): string {
        return this.name
    }
}

export default ColorSpace_ColorMatchRGB
