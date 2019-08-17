import NulliceColor from "../core"
import ColorModel from "../ColorModels/ColorModel"
import { ColorModels } from "../core.const"
import { ColorFormat_HEXA } from "./ColorFormat.HEXA"
import { ColorFormat_RGBA } from "./ColorFormat.RGBA"
import { ColorFormat_RGB } from "./ColorFormat.RGB"
import { ColorFormat_HSL } from "./ColorFormat.HSL"
import { ColorFormat_HSLA } from "./ColorFormat.HSLA"

export function getColorFromArgs(args: any[], out: NulliceColor) {
    let argLen = args.length

    switch (argLen) {
        case 1: {
            // 直接输入对象
            if (typeof args[0] === "object") {
                paresObject(args[0], out)
            }
            // 输入字符串
            else if (typeof args[0] === "string") {
                let str = args[0]
                paresString(str, out)
            }
            break
        }

        case 2: {
            // 直接输入对象
            if (typeof args[0] === "object") {
                paresObject(args[0], out)
            }
            // 输入字符串
            else if (typeof args[0] === "string") {
                let str = args[0]
                paresString(str, out)
            }

            // 第二个参数设置色彩空间
            out.setColorSpace(args[1])

            break
        }

        case 3: {
            break
        }

        case 4: {
            break
        }
    }
}

function paresObject(ob: any, out: NulliceColor) {
    // 目的地有模型
    if (out.colorModel) {
        out.colorModel.inputColor(out, ob)
    } else {
        // 常用色彩模型的判断
        if (ColorModels.RGB.isMatchedColor(ob))
            ColorModels.RGB.inputColor(<any>out, ob), (out.colorModel = ColorModels.RGB)
        if (ColorModels.HSL.isMatchedColor(ob))
            ColorModels.HSL.inputColor(<any>out, ob), (out.colorModel = ColorModels.HSL)
        if (ColorModels.HSV.isMatchedColor(ob))
            ColorModels.HSV.inputColor(<any>out, ob), (out.colorModel = ColorModels.HSV)

        for (let key in ColorModels) {
            let model: ColorModel<any> = (<any>ColorModels)[key]
            if (model.isMatchedColor(ob)) {
                model.inputColor(out, ob)
                out.colorModel = model
                return
            }
        }
    }
}

function paresString(str: string, out: any) {
    if (str[0] === "#") {
        ColorFormat_HEXA.parse(str, out)
    } else if (str.slice(0, 4).toLowerCase() === "rgba") {
        ColorFormat_RGBA.parse(str, out)
    } else if (str.slice(0, 3).toLowerCase() === "rgb") {
        ColorFormat_RGB.parse(str, out)
    } else if (str.slice(0, 4).toLowerCase() === "hsla") {
        ColorFormat_HSLA.parse(str, out)
    } else if (str.slice(0, 3).toLowerCase() === "hsl") {
        ColorFormat_HSL.parse(str, out)
    }
}

export function parseHexa(str: string, out?: any) {
    if (out === undefined) out = {}
    // #fffe
    if (str.length === 5) {
        let alpha = Number.parseInt(str.slice(4, 5), 16)
        alpha = (((alpha & 0xf) << 4) | (alpha & 0xf)) / 255
        out.alpha = +alpha.toFixed(3)

        let int = Number.parseInt(str.slice(1, 4), 16)
        out.r = ((int >> 8) & 0xf) | ((int >> 4) & 0x0f0)
        out.g = ((int >> 4) & 0xf) | (int & 0xf0)
        out.b = ((int & 0xf) << 4) | (int & 0xf)

        return out
    }
    // #ff1122ee
    else if (str.length === 9) {
        let alpha = Number.parseInt(str.slice(7, 9), 16)
        out.alpha == +(alpha / 255).toFixed(3)

        let int = Number.parseInt(arguments[0].slice(1, 7), 16)
        out.r = (int >> 16) & 0xff
        out.g = (int >> 8) & 0xff
        out.b = int & 0xff
        return out
    }
}

export function parseAhex(str: string, out?: any) {
    if (out === undefined) out = {}
    // #efff
    if (str.length === 5) {
        let alpha = Number.parseInt(str.slice(1, 2), 16)
        alpha = (((alpha & 0xf) << 4) | (alpha & 0xf)) / 255
        out.alpha = +alpha.toFixed(3)

        let int = Number.parseInt(str.slice(2, 5), 16)
        out.r = ((int >> 8) & 0xf) | ((int >> 4) & 0x0f0)
        out.g = ((int >> 4) & 0xf) | (int & 0xf0)
        out.b = ((int & 0xf) << 4) | (int & 0xf)

        return out
    }
    // #eeff1122
    else if (str.length === 9) {
        let alpha = Number.parseInt(str.slice(1, 3), 16)
        out.alpha = +(alpha / 255).toFixed(3)

        let int = Number.parseInt(str.slice(3, 9), 16)
        out.r = (int >> 16) & 0xff
        out.g = (int >> 8) & 0xff
        out.b = int & 0xff
        return out
    }
}

export function parseHex(str: string, out?: any) {
    if (out === undefined) out = {}
    // #fff
    if (str.length === 4) {
        out.alpha = 1

        let int = Number.parseInt(str.slice(1, 4), 16)
        out.r = ((int >> 8) & 0xf) | ((int >> 4) & 0x0f0)
        out.g = ((int >> 4) & 0xf) | (int & 0xf0)
        out.b = ((int & 0xf) << 4) | (int & 0xf)

        return out
    }
    // #ff1122
    else if (str.length === 7) {
        out.alpha = 1

        let int = Number.parseInt(str.slice(1, 7), 16)
        out.r = (int >> 16) & 0xff
        out.g = (int >> 8) & 0xff
        out.b = int & 0xff
        return out
    }
}

export function parseRGBA(str: string, out?: any) {
    if (out === undefined) out = {}

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

        if (arr.length == 4) {
            result = reg.exec(arr[3])
            if (result && result.length > 0) {
                out.alpha = Number.parseFloat(result[0])
            }
        }
    }
}
