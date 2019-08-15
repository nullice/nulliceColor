import { IObjectHWB, IObjectRGB } from "../core.const";
/**
 * HWB 对象转换到 RGB 对象
 * @param hwb
 * @param out
 * @constructor
 */
declare function HWB_to_RGB(hwb: IObjectHWB, out?: any): IObjectRGB;
export default HWB_to_RGB;
