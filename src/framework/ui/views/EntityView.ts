import "reflect-metadata";

const entityViewOptionsKey = Symbol("entityViewOptions");

export const EntityView = (options?: EntityViewOptions): ClassDecorator => {
    return (target: Function) => {
        Reflect.defineMetadata(entityViewOptionsKey, options, target);
    }
};

export interface EntityViewOptions {
    label?: string;
    entity: any;
    operation: 'create' | 'edit' | 'readOnly';
    managed: boolean;
}

export enum Access {
    ReadOnly = "readOnly",
    ReadWrite = "readWrite",
    None = "none"
}