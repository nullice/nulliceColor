import IColorSpace, { forNaN } from "./ColorSpace"
import { ReferencePrimaryColor, ReferenceWhite } from "../Reference/ReferencePoints"

const GAMMA = 2.222
const GAMMA_RECI = 0.450045 //  1/GAMMA

let ACES_CG_LinearConfig = {
    WHITE_POINT: [0.96422, 1.0, 0.82521],
    R_POINT: [0.69, 0.285, -0.006],
    G_POINT: [0.15, 0.672, 0.01],
    B_POINT: [0.125, 0.044, 0.821]
}

let ColorSpace_ACES_CG_Linear: IColorSpace = {
    name: "ACES_CG_Linear",
    enGamma(value: number): number {
        return forNaN(value)
    },

    deGamma(value: number): number {
        return forNaN(value)
    },

    WHITE_POINT: ReferenceWhite.D50,
    R_POINT: [0.69, 0.285, -0.006],
    G_POINT: [0.15, 0.672, 0.01],
    B_POINT: [0.125, 0.044, 0.821],

    // prettier-ignore
    RGB2XYZ_MATRIX: [
        0.68935, 0.14983, 0.12503,
        0.28473, 0.67126, 0.04401,
        -0.00599, 0.00999, 0.82122],
    // prettier-ignore
    XYZ2RGB_MATRIX: [
        1.5943, -0.35254, -0.22384,
        -0.67757, 1.64076, 0.01523,
        0.01988, -0.02253, 1.21589
    ],

    toString(): string {
        return this.name
    },

    toJSON(): string {
        return this.name
    }
}

export default ColorSpace_ACES_CG_Linear
