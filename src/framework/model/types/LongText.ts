import "reflect-metadata";

const longTextOptionsKey = Symbol("longTextOptions");

export const LongText = (options?: LongTextOptions) => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(longTextOptionsKey, options, target, propertyKey);
};

export interface LongTextOptions {
}
