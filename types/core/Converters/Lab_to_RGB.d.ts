/**
 * Lab 对象转换为 RGB 对象
 * @param lab
 * @param colorSpace
 * @param out
 * @constructor
 */
import { IObjectLab, IObjectRGB } from "../core.const";
import IColorSpace from "../ColorSpace/ColorSpace";
declare function Lab_to_RGB(lab: IObjectLab, colorSpace?: IColorSpace, out?: any): IObjectRGB;
export default Lab_to_RGB;
