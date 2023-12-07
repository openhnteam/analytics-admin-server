export declare class GlobalVariable {
    private static instance;
    private data;
    private constructor();
    static getInstance(): GlobalVariable;
    setData(key: string, value: any): void;
    getData(key: string): any;
}
