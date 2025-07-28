import "reflect-metadata";

const fieldUiOptionsKey = Symbol("fieldUiOptions");

export const FieldUi = (options?: FieldUiOptions): PropertyDecorator => {
    return (target: Object, propertyKey: string | symbol) => {
        Reflect.defineMetadata(fieldUiOptionsKey, options, target, propertyKey);
    }
};

export interface FieldUiOptions {
    label: string;
}