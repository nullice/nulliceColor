import { IColorFormat } from "./ColorFormat"
import { ColorFormat_HEX } from "./ColorFormat.HEX"
import { ColorModels } from "../core.const"

export let ColorFormat_AHEX: IColorFormat = {
    parse(str: string, out?: any) {
        if (out === undefined) out = {}
        out.colorModel = ColorModels.RGB


        // #rrggbb
        if (str.length === 7) {
            return ColorFormat_HEX.parse(str, out)
        }
        // #rgb
        else if (str.length === 4) {
            return ColorFormat_HEX.parse(str, out)
        }
        // #rgba
        else if (str.length === 5) {
            let alpha = Number.parseInt(str.slice(1, 2), 16)
            alpha = (((alpha & 0xf) << 4) | (alpha & 0xf)) / 255
            out.alpha = +alpha.toFixed(3)

            let int = Number.parseInt(str.slice(2, 5), 16)
            out.r = ((int >> 8) & 0xf) | ((int >> 4) & 0x0f0)
            out.g = ((int >> 4) & 0xf) | (int & 0xf0)
            out.b = ((int & 0xf) << 4) | (int & 0xf)

            return out
        }
        // #rrggbbaa
        else if (str.length === 9) {
            let alpha = Number.parseInt(str.slice(1, 3), 16)
            out.alpha = +(alpha / 255).toFixed(3)

            let int = Number.parseInt(str.slice(3, 9), 16)
            out.r = (int >> 16) & 0xff
            out.g = (int >> 8) & 0xff
            out.b = int & 0xff
            return out
        } else {
            return null
        }

        return out
    },

    format() {}
}
