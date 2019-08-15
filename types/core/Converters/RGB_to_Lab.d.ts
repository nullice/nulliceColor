import { IObjectRGB, IObjectLab } from "../core.const";
import IColorSpace from "../ColorSpace/ColorSpace";
/**
 * RGB 对象转换为 Lab 对象
 * @param rgb
 * @param colorSpace
 * @constructor
 */
declare function RGB_to_Lab(rgb: IObjectRGB, colorSpace?: IColorSpace, out?: any): IObjectLab;
export default RGB_to_Lab;
