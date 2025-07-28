import "reflect-metadata";

const fieldOptionsKey = Symbol("fieldOptions");

export const Field = (options?: FieldOptions): PropertyDecorator => {
    return (target: Object, propertyKey: string | symbol) => {
        Reflect.defineMetadata(fieldOptionsKey, options, target, propertyKey);
    }
};

export interface FieldOptions {
    required?: boolean;
    calculation?: (data: any) => any;
    access?: (data: any) => boolean | Access;
}

export enum Access {
    ReadOnly = "readOnly",
    ReadWrite = "readWrite",
    None = "none"
}