import "reflect-metadata";

const textOptionsKey = Symbol("textOptions");

export const Text = (options?: TextOptions) => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(textOptionsKey, options, target, propertyKey);
};

export interface TextOptions {
    minLength?: number;
    maxLength?: number;
    regex?: RegExp;
}
