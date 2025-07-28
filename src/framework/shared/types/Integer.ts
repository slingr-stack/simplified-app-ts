import "reflect-metadata";
import { IntegerModel } from "../../model/types/IntegerModel";
import { IntegerUi } from "../../ui/types/IntegerUi";

const IntegerOptionsKey = Symbol("integerOptions");

export const Integer = (options?: IntegerOptions) => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(IntegerOptionsKey, options, target, propertyKey);
};

export interface IntegerOptions extends IntegerModel, IntegerUi {
}
