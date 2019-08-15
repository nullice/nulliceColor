import { IColorFormat } from "./ColorFormat"
import { ColorModels } from "../core.const"

export let ColorFormat_RGBA: IColorFormat = {
    parse(str: string, out?: any, dontParesAlpha?: boolean) {
        if (out === undefined) out = {}
        out.colorModel = ColorModels.RGB

        let reg = /[0-9\.]+/
        let arr = str.split(",")
        if (arr.length >= 3) {
            let result = reg.exec(arr[0])

            if (result && result.length > 0) {
                out.r = Number.parseInt(result[0])
            }

            result = reg.exec(arr[1])
            if (result && result.length > 0) {
                out.g = Number.parseInt(result[0])
            }

            result = reg.exec(arr[2])
            if (result && result.length > 0) {
                out.b = Number.parseInt(result[0])
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
