import "reflect-metadata";
import { FieldUi } from "../ui/fields/FieldUi";
import { FieldModel } from "../model/FieldModel";

const fieldOptionsKey = Symbol("fieldOptions");

export const Field = (options?: FieldOptions): PropertyDecorator => {
    return (target: Object, propertyKey: string | symbol) => {
        Reflect.defineMetadata(fieldOptionsKey, options, target, propertyKey);
    }
};

export interface FieldOptions extends FieldUi, FieldModel {
}
