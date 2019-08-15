import { IColorFormat } from "./ColorFormat"

export let ColorFormat_HEX: IColorFormat = {
    parse(str: string, out?: any) {
        if (out === undefined) out = {}
        // #rrggbb
        if (str.length === 7) {
            out.alpha = 1

            let int = Number.parseInt(str.slice(1, 7), 16)
            out.r = (int >> 16) & 0xff
            out.g = (int >> 8) & 0xff
            out.b = int & 0xff
            return out
        }
        // #rgb
        else if (str.length === 4) {
            out.alpha = 1

            let int = Number.parseInt(str.slice(1, 4), 16)
            out.r = ((int >> 8) & 0xf) | ((int >> 4) & 0x0f0)
            out.g = ((int >> 4) & 0xf) | (int & 0xf0)
            out.b = ((int & 0xf) << 4) | (int & 0xf)


            return out
        } else {
            return null
        }
    },

    format() {}
}
