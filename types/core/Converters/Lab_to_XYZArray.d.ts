import { ArrayXYZ, IObjectLab } from "../core.const";
/**
 * 把 Lab 对象转换成 XYZ 数组
 * @param lab
 * @param out
 * @constructor
 */
declare function Lab_to_XYZArray(lab: IObjectLab, out?: any): ArrayXYZ;
export default Lab_to_XYZArray;
