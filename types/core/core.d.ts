import IColorModel from "./ColorModels/ColorModel";
import IColorSpace, { creatColorSpace } from "./ColorSpace/ColorSpace";
import { IObjectHSL, IObjectHSV, IObjectRGB, IObjectHWB, IObjectLab, IObjectXYZ } from "./core.const";
import ColorSpace from "./ColorSpace/ColorSpace";
export default class NulliceColor {
    colorModel?: IColorModel<any>;
    colorSpace?: IColorSpace;
    alpha: number;
    /**
     * 所有支持的色彩模型
     */
    static ColorModels: {
        RGB: IColorModel<IObjectRGB>;
        HSL: IColorModel<IObjectHSL>;
        HSV: IColorModel<IObjectHSV>;
        HWB: IColorModel<IObjectHWB>;
        Lab: IColorModel<IObjectLab>;
        XYZ: IColorModel<IObjectXYZ>;
    };
    static ColorSpaces: {
        sRGB: IColorSpace;
        sRGB_D65: IColorSpace;
        DisplayP3: IColorSpace;
    };
    /** 根据配置创建色彩空间*/
    static creatColorSpace: typeof creatColorSpace;
    constructor(...args: any[]);
    /**
     * 根据一个输入设置色彩值
     * @param args
     */
    set(...args: any[]): void;
    /**
     * 改变色彩空间
     * @param newColorSpace
     */
    changeColorSpace(newColorSpace: ColorSpace): NulliceColor;
    /**
     * 获取当前色彩在制定色彩空间的拷贝
     * @param newColorSpace
     * @param change 修改自身
     * @return {any}
     */
    getCopyWithColorSpace(newColorSpace: ColorSpace, change?: boolean): NulliceColor;
    /**
     * 基于当前色彩返回一个新的 ColorRGB 实例
     * @param targetColorSpace
     */
    getRGB(targetColorSpace?: IColorSpace): ColorRGB;
    /**
     * 基于当前色彩返回一个新的 ColorHSV 实例
     * @param targetColorSpace
     */
    getHSV(targetColorSpace?: IColorSpace): ColorHSV;
    /**
     * 基于当前色彩返回一个新的 ColorHSL 实例
     * @param targetColorSpace
     */
    getHSL(targetColorSpace?: IColorSpace): ColorHSV;
    /**
     * 基于当前色彩返回一个新的 ColorLab 实例
     * @param targetColorSpace
     */
    getLab(targetColorSpace?: IColorSpace): ColorHSV;
    /**
     * 基于当前色彩返回一个新的 ColorXYZ 实例
     * @param targetColorSpace
     */
    getXYZ(targetColorSpace?: IColorSpace): ColorHSV;
    /**
     * 把当前色彩设置到另一个色彩实例上
     * @param color
     * @param targetColorSpace
     */
    toNewColor(color?: NulliceColor, targetColorSpace?: IColorSpace): NulliceColor;
}
export declare class ColorRGB extends NulliceColor implements IObjectRGB {
    colorModel: IColorModel<IObjectRGB>;
    r: number;
    g: number;
    b: number;
}
export declare class ColorHSL extends NulliceColor implements IObjectHSL {
    colorModel: IColorModel<IObjectHSL>;
    h: number;
    s: number;
    l: number;
}
export declare class ColorHSV extends NulliceColor implements IObjectHSV {
    colorModel: IColorModel<IObjectHSV>;
    h: number;
    s: number;
    v: number;
}
export declare class ColorHWB extends NulliceColor implements IObjectHWB {
    colorModel: IColorModel<IObjectHWB>;
    h: number;
    w: number;
    b: number;
}
export declare class ColorLab extends NulliceColor implements IObjectLab {
    colorModel: IColorModel<IObjectLab>;
    L: number;
    a: number;
    b: number;
}
export declare class ColorXYZ extends NulliceColor implements IObjectXYZ {
    colorModel: IColorModel<IObjectXYZ>;
    x: number;
    y: number;
    z: number;
}
