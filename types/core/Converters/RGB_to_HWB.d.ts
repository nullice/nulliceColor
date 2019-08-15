import { IObjectRGB, IObjectHWB } from "../core.const";
/**
 * RGB 对象转换到 HWB 对象
 * @param rgb
 * @param out
 * @constructor
 */
declare function RGB_to_HWB(rgb: IObjectRGB, out?: any): IObjectHWB;
export default RGB_to_HWB;
