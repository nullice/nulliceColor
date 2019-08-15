export default interface IColorSpace {
    name: string;
    enGamma: (value: number) => number;
    deGamma: (value: number) => number;
    WHITE_POINT: number[];
    R_POINT: number[];
    G_POINT: number[];
    B_POINT: number[];
    RGB2XYZ_MATRIX: number[];
    XYZ2RGB_MATRIX: number[];
    toString(): string;
    toJSON(): string;
}
export interface IColorSpaceConfig {
    name: string;
    /** 白点 */
    WHITE_POINT: [number, number, number];
    /** 红点 */
    R_POINT: [number, number, number];
    /** 绿点 */
    G_POINT: [number, number, number];
    /** 蓝点 */
    B_POINT: [number, number, number];
    deGamma: (value: number) => number;
    enGamma: (value: number) => number;
}
/**
 * 根据配置创建一个色彩空间
 * @param config
 */
export declare function creatColorSpace(config: IColorSpaceConfig): IColorSpace;
