import IColorSpace, { forNaN } from "./ColorSpace"
import { ReferencePrimaryColor, ReferenceWhite } from "../Reference/ReferencePoints"

const GAMMA = 2.199
const GAMMA_RECI = 0.454752 //  1/GAMMA

let CIE_RGBConfig = {
    WHITE_POINT: [0.96422, 1.0, 0.82521],
    R_POINT: [0.487, 0.175, -0.001],
    G_POINT: [0.306, 0.825, 0.017],
    B_POINT: [0.171, 0.001, 0.809]
}

let ColorSpace_CIE_RGB: IColorSpace = {
    name: "CIE_RGB",
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
        0.48762, 0.30555, 0.17105,
        0.17522, 0.82378, 0.001,
        -0.001, 0.01697, 0.80924],
    // prettier-ignore
    XYZ2RGB_MATRIX: [
        2.36069, -0.86534, -0.49791,
        -0.50216, 1.39803, 0.10441,
        0.01345, -0.0304, 1.23293],

    toString(): string {
        return this.name
    },

    toJSON(): string {
        return this.name
    }
}

export default ColorSpace_CIE_RGB
