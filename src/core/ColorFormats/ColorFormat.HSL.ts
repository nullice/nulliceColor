import { IColorFormat } from "./ColorFormat"
import { ColorFormat_HSLA } from "./ColorFormat.HSLA"

export let ColorFormat_HSL: IColorFormat = {
    parse(str: string, out?: any) {
        if (out === undefined) out = {}
        ColorFormat_HSLA.parse(str, out, true)
        return out
    },
    format() {}
}
