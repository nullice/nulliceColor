export interface IColorFormat {
    parse: (input: any, out?: any, options?: any) => any | null;
    format: (color: any, out?: any, options?: any) => any;
}
