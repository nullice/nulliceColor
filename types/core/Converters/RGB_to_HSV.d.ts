import { IObjectRGB, IObjectHSV } from "../core.const";
/**
 * RGB 对象转换到 HSV 对象
 * @param rgb
 * @param out
 * @return {any}
 */
declare function RGB_to_HSV(rgb: IObjectRGB, out?: any): IObjectHSV;
export default RGB_to_HSV;
