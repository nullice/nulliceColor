import IColorModel from "./ColorModels/ColorModel"
import IColorSpace, { creatColorSpace } from "./ColorSpace/ColorSpace"
import {
    IColorDataObject,
    IObjectHSL,
    IObjectHSV,
    IObjectRGB,
    IObjectHWB,
    IObjectLab,
    ColorModels,
    ColorSpaces,
    IObjectXYZ
} from "./core.const"
import { getColorFromArgs } from "./ColorFormats/colorReader"

import ColorSpace from "./ColorSpace/ColorSpace"
import ColorSpace_sRGB from "./ColorSpace/ColorSpace.sRGB"

export default class NulliceColor {
    public colorModel?: IColorModel<any>
    public colorSpace?: IColorSpace
    public alpha: number = 1

    /**
     * 所有支持的色彩模型
     */
    static ColorModels = ColorModels

    static ColorSpaces = ColorSpaces

    /** 根据配置创建色彩空间*/
    static creatColorSpace = creatColorSpace

    constructor(...args: any[]) {
        Object.defineProperty(this, "colorModel", {
            value: undefined,
            enumerable: false,
            writable: true
        })
        Object.defineProperty(this, "colorSpace", {
            value: undefined,
            enumerable: false,
            writable: true
        })

        getColorFromArgs(args, this)
    }

    /**
     * 根据一个输入设置色彩值
     * @param args
     */
    set(...args: any[]) {
        let color: any = {}
        // 根据输入获取一个色彩对象
        getColorFromArgs(args, color)

        // 目标色彩转换到 rgb
        let rgb = color.colorModel.toRGB(color)
        if (this.colorModel) {
            this.colorModel.fromRGB(<any>this, rgb)
        } else {
            ColorModels.RGB.fromRGB(<any>this, rgb)
        }
    }

    /**
     * 改变色彩空间
     * @param newColorSpace
     */
    changeColorSpace(newColorSpace: ColorSpace) {
        return this.getCopyWithColorSpace(newColorSpace, true)
    }

    /**
     * 获取当前色彩在制定色彩空间的拷贝
     * @param newColorSpace
     * @param change 修改自身
     * @return {any}
     */
    getCopyWithColorSpace(newColorSpace: ColorSpace, change = false) {
        let nowColorModel = this.colorModel || ColorModels.RGB
        let nowColorSpace = this.colorSpace || ColorSpace_sRGB
        // color => rgb_1
        let rgb = nowColorModel.toRGB(<any>this)

        // rgb_1  => xyz
        rgb.colorSpace = nowColorSpace
        let xyz = <IObjectXYZ>{}
        ColorModels.XYZ.fromRGB(xyz, rgb)

        // xyz => rgb_2
        let newRgb: any = { colorSpace: newColorSpace }
        ;(<any>xyz).colorSpace = newColorSpace
        newRgb = ColorModels.XYZ.toRGB(xyz)

        // rgb_2 => color
        let re
        if (change) {
            re = this
        } else {
            re = new NulliceColor()
        }

        nowColorModel.fromRGB(<any>re, newRgb)
        return re
    }

    /**
     * 基于当前色彩返回一个新的 ColorRGB 实例
     * @param targetColorSpace
     */
    getRGB(targetColorSpace?: IColorSpace): ColorRGB {
        let color = new ColorRGB()
        color.colorSpace = targetColorSpace || this.colorSpace
        return <ColorRGB>this.toNewColor(color)
    }

    /**
     * 基于当前色彩返回一个新的 ColorHSV 实例
     * @param targetColorSpace
     */
    getHSV(targetColorSpace?: IColorSpace): ColorHSV {
        let color = new ColorHSV()
        color.colorSpace = targetColorSpace || this.colorSpace
        return <ColorHSV>this.toNewColor(color)
    }

    /**
     * 基于当前色彩返回一个新的 ColorHSL 实例
     * @param targetColorSpace
     */
    getHSL(targetColorSpace?: IColorSpace): ColorHSV {
        let color = new ColorHSL()
        color.colorSpace = targetColorSpace || this.colorSpace
        return <ColorHSV>this.toNewColor(color)
    }

    /**
     * 基于当前色彩返回一个新的 ColorLab 实例
     * @param targetColorSpace
     */
    getLab(targetColorSpace?: IColorSpace): ColorHSV {
        let color = new ColorLab()
        color.colorSpace = targetColorSpace || this.colorSpace
        return <ColorHSV>this.toNewColor(color)
    }

    /**
     * 基于当前色彩返回一个新的 ColorXYZ 实例
     * @param targetColorSpace
     */
    getXYZ(targetColorSpace?: IColorSpace): ColorHSV {
        let color = new ColorXYZ()
        color.colorSpace = targetColorSpace || this.colorSpace
        return <ColorHSV>this.toNewColor(color)
    }

    /**
     * 把当前色彩设置到另一个色彩实例上
     * @param color
     * @param targetColorSpace
     */
    toNewColor(color: NulliceColor = new NulliceColor(), targetColorSpace?: IColorSpace): NulliceColor {
        color.colorSpace = targetColorSpace || this.colorSpace
        if (!this.colorModel) throw new Error("[EssenceColor] colorModel not found.")
        if (!color.colorModel) color.colorModel = this.colorModel
        color.colorModel.fromRGB(color, this.colorModel.toRGB(this))
        return color
    }
}

export class ColorRGB extends NulliceColor implements IObjectRGB {
    colorModel = ColorModels.RGB
    r!: number
    g!: number
    b!: number
}

export class ColorHSL extends NulliceColor implements IObjectHSL {
    colorModel = ColorModels.HSL
    h!: number
    s!: number
    l!: number
}

export class ColorHSV extends NulliceColor implements IObjectHSV {
    colorModel = ColorModels.HSV
    h!: number
    s!: number
    v!: number
}

export class ColorHWB extends NulliceColor implements IObjectHWB {
    colorModel = ColorModels.HWB
    h!: number
    w!: number
    b!: number
}

export class ColorLab extends NulliceColor implements IObjectLab {
    colorModel = ColorModels.Lab
    L!: number
    a!: number
    b!: number
}

export class ColorXYZ extends NulliceColor implements IObjectXYZ {
    colorModel = ColorModels.XYZ
    x!: number
    y!: number
    z!: number
}
