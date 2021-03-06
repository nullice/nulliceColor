import ColorModel_RGB from "./ColorModels/ColorModel.RGB"
import ColorModel_HSL from "./ColorModels/ColorModel.HSL"
import ColorModel_HSV from "./ColorModels/ColorModel.HSV"
import ColorModel_HWB from "./ColorModels/ColorModel.HWB"
import ColorModel_Lab from "./ColorModels/ColorModel.Lab"
import ColorModel_XYZ from "./ColorModels/ColorModel.XYZ"
import ColorSpace_sRGB from "./ColorSpace/ColorSpace.sRGB"
import ColorSpace_sRGB_D65 from "./ColorSpace/ColorSpace.sRGB_D65"
import ColorSpace_DisplayP3 from "./ColorSpace/ColorSpace.DisplayP3"
import ColorSpace_Rec709 from "./ColorSpace/ColorSpace.Rec709"
import ColorSpace_Rec2020 from "./ColorSpace/ColorSpace.Rec2020"
import ColorSpace_ACES_CG_Linear from "./ColorSpace/ColorSpace.ACES_CG_Linear"
import ColorSpace_AdobeRGB from "./ColorSpace/ColorSpace.AdobeRGB"
import ColorSpace_CIE_RGB from "./ColorSpace/ColorSpace.CIE_RGB"
import ColorSpace_AppleRGB from "./ColorSpace/ColorSpace.AppleRGB"
import ColorSpace_ColorMatchRGB from "./ColorSpace/ColorSpace.ColorMatchRGB"
import ColorSpace_ProPhotoRGB from "./ColorSpace/ColorSpace.ProPhotoRGB"
import IColorModel from "./ColorModels/ColorModel"
import ColorSpace from "./ColorSpace/ColorSpace"

export let ColorModels = {
    RGB: ColorModel_RGB,
    HSL: ColorModel_HSL,
    HSV: ColorModel_HSV,
    HWB: ColorModel_HWB,
    Lab: ColorModel_Lab,
    XYZ: ColorModel_XYZ
}

export let ColorSpaces = {
    sRGB: ColorSpace_sRGB,
    sRGB_D65: ColorSpace_sRGB_D65,
    DisplayP3: ColorSpace_DisplayP3,
    Rec709: ColorSpace_Rec709,
    Rec2020: ColorSpace_Rec2020,
    ACES_CG_Linear: ColorSpace_ACES_CG_Linear,
    AdobeRGB: ColorSpace_AdobeRGB,
    CIE_RGB: ColorSpace_CIE_RGB,
    AppleRGB: ColorSpace_AppleRGB,
    ColorMatchRGB: ColorSpace_ColorMatchRGB,
    ProPhotoRGB: ColorSpace_ProPhotoRGB,
}

export const ALIAS = {
    alpha: ["a", "alpha", "opacity"]
}

export type IColorDataObject = { colorModel?: IColorModel<any>; colorSpace?: ColorSpace }

// 各种色彩模型的色彩属性对象
export interface IObjectRGB extends IColorDataObject {
    r: number
    g: number
    b: number
}

export interface IObjectHSL extends IColorDataObject {
    h: number
    s: number
    l: number
}

export interface IObjectHSV extends IColorDataObject {
    h: number
    s: number
    v: number
}

export interface IObjectHWB extends IColorDataObject {
    h: number
    w: number
    b: number
}

export interface IObjectLab extends IColorDataObject {
    L: number
    a: number
    b: number
}

export interface IObjectXYZ extends IColorDataObject {
    x: number
    y: number
    z: number
}

export type ArrayRGB = [ByteNumber1, ByteNumber1, ByteNumber1]
export type ArrayXYZ = [number, number, number]
// prettier-ignore
export type ByteNumber1 = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99|100|101|102|103|104|105|106|107|108|109|110|111|112|113|114|115|116|117|118|119|120|121|122|123|124|125|126|127|128|129|130|131|132|133|134|135|136|137|138|139|140|141|142|143|144|145|146|147|148|149|150|151|152|153|154|155|156|157|158|159|160|161|162|163|164|165|166|167|168|169|170|171|172|173|174|175|176|177|178|179|180|181|182|183|184|185|186|187|188|189|190|191|192|193|194|195|196|197|198|199|200|201|202|203|204|205|206|207|208|209|210|211|212|213|214|215|216|217|218|219|220|221|222|223|224|225|226|227|228|229|230|231|232|233|234|235|236|237|238|239|240|241|242|243|244|245|246|247|248|249|250|251|252|253|254|255;
