import { IObjectHSV, IObjectRGB } from "../core.const";
/**
 * HSV 对象转换到 RGB 对象
 * @param hsv
 * @param out
 * @constructor
 */
declare function HSV_to_RGB(hsv: IObjectHSV, out?: any): IObjectRGB;
export default HSV_to_RGB;
