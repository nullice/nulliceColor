import IColorSpace, { forNaN } from "./ColorSpace"
import { ReferencePrimaryColor, ReferenceWhite } from "../Reference/ReferencePoints"

const GAMMA = 1.801
const GAMMA_RECI = 0.55525 //  1/GAMMA

let ProPhotoRGBConfig = {
    WHITE_POINT: [0.96422, 1.0, 0.82521],
    R_POINT: [0.798, 0.288, 0.0],
    G_POINT: [0.135, 0.712, 0.0],
    B_POINT: [0.031, 0.0, 0.825]
}

let ColorSpace_ProPhotoRGB: IColorSpace = {
    name: "ProPhotoRGB",
    enGamma(value: number): number {
        return forNaN(Math.pow(value, GAMMA_RECI))
    },

    deGamma(value: number): number {
        return forNaN(Math.pow(value, GAMMA))
    },

    WHITE_POINT: ReferenceWhite.D50,
    R_POINT: [0.798, 0.288, 0.0],
    G_POINT: [0.135, 0.712, 0.0],
    B_POINT: [0.031, 0.0, 0.825],

    // prettier-ignore
    RGB2XYZ_MATRIX:[
        0.79823, 0.13498, 0.03101,
        0.28808, 0.71192, 0,
        0, 0, 0.82521
    ],
    // prettier-ignore
    XYZ2RGB_MATRIX: [
        1.3448, -0.25498, -0.05053,
        -0.54418, 1.50784, 0.02045,
        0, 0, 1.21181
    ],

    toString(): string {
        return this.name
    },

    toJSON(): string {
        return this.name
    }
}

export default ColorSpace_ProPhotoRGB
