import { IColorFormat } from "./ColorFormat"
import { ColorFormat_RGBA } from "./ColorFormat.RGBA"

export let ColorFormat_RGB: IColorFormat = {
    parse(str: string, out?: any) {
        if (out === undefined) out = {}
        ColorFormat_RGBA.parse(str, out, true)
        return out
    },

    format() {}
}
