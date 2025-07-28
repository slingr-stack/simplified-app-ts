import "reflect-metadata";

const recordLabelOptionsKey = Symbol("recordLabelOptions");

export const RecordLabel = (options?: RecordLabelOptions): PropertyDecorator => {
    return (target: Object, propertyKey: string | symbol) => {
        Reflect.defineMetadata(recordLabelOptionsKey, options, target, propertyKey);
    }
};

export interface RecordLabelOptions {
}