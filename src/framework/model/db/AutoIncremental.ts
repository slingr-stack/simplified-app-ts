import "reflect-metadata";

const autoIncrementalOptionsKey = Symbol("autoIncrementalOptions");

export const AutoIncremental = (options?: AutoIncrementalOptions) => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(autoIncrementalOptionsKey, options, target, propertyKey);
};

export interface AutoIncrementalOptions {
    start?: number;
    increment?: number;
}
