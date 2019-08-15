import { IColorFormat } from "./ColorFormat"
import ColorModel from "../ColorModels/ColorModel"
import ColorModel_HSL from "../ColorModels/ColorModel.HSL"

export let ColorFormat_HSLA: IColorFormat = {
    parse(str: string, out?: any, dontParesAlpha?: boolean) {
        if (out === undefined) out = {}
        out.colorModel = ColorModel_HSL

        let reg = /[0-9\.]+/
        let arr = str.split(",")
        if (arr.length >= 3) {
            let result = reg.exec(arr[0])

            if (result && result.length > 0) {
                out.h = Number.parseInt(result[0])
            }

            result = reg.exec(arr[1])
            if (result && result.length > 0) {
                out.s = Number.parseFloat(result[0])
            }

            result = reg.exec(arr[2])
            if (result && result.length > 0) {
                out.l = Number.parseFloat(result[0])
            }

            if (dontParesAlpha) return out

            if (arr.length == 4) {
                result = reg.exec(arr[3])
                if (result && result.length > 0) {
                    out.alpha = Number.parseFloat(result[0])
                }
            }
        } else {
            return null
        }

        return out
    },

    format() {}
}
