import IColorSpace, { forNaN } from "./ColorSpace"
import { ReferencePrimaryColor, ReferenceWhite } from "../Reference/ReferencePoints"

const GAMMA = 2.199
const GAMMA_RECI = 0.454752 //  1/GAMMA

let AdobeRGBConfig = {
    WHITE_POINT: [0.96422, 1.0, 0.82521],
    R_POINT: [0.61, 0.311, 0.019],
    G_POINT: [0.205, 0.626, 0.061],
    B_POINT: [0.149, 0.063, 0.745]
}

let ColorSpace_AdobeRGB: IColorSpace = {
    name: "AdobeRGB",
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
    RGB2XYZ_MATRIX: [
        0.61022, 0.20496, 0.14904,
        0.31111, 0.62587, 0.06302,
        0.01901, 0.06099, 0.74522],
    // prettier-ignore
    XYZ2RGB_MATRIX: [
        1.95962, -0.60855, -0.34046,
        -0.97712, 1.91449, 0.03353, 
        0.02999, -0.14116, 1.34783],

    toString(): string {
        return this.name
    },

    toJSON(): string {
        return this.name
    }
}

export default ColorSpace_AdobeRGB
