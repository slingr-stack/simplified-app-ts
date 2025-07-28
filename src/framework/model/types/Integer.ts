import "reflect-metadata";

const IntegerOptionsKey = Symbol("integerOptions");

export const Integer = (options?: IntegerOptions) => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(IntegerOptionsKey, options, target, propertyKey);
};

export interface IntegerOptions {
    min?: number;
    max?: number;
    positive?: boolean;
    negative?: boolean;
}
