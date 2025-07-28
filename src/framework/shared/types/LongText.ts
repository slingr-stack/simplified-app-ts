import "reflect-metadata";
import { LongTextModel } from "../../model/types/LongTextModel";
import { LongTextUi } from "../../ui/types/LongTextUi";

const longTextOptionsKey = Symbol("longTextOptions");

export const LongText = (options?: LongTextOptions) => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(longTextOptionsKey, options, target, propertyKey);
};

export interface LongTextOptions extends LongTextModel, LongTextUi {
}
