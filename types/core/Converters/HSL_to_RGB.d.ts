import { IObjectHSL, IObjectRGB } from "../core.const";
/**
 * HSL 对象转换到 RGB 对象
 * @param hsl
 * @param out
 * @constructor
 */
declare function HSL_to_RGB(hsl: IObjectHSL, out?: any): IObjectRGB;
export default HSL_to_RGB;
