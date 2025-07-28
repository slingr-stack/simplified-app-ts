import "reflect-metadata";
import { TextModel } from "../../model/types/TextModel";
import { TextUi } from "../../ui/types/TextUi";

const textOptionsKey = Symbol("textOptions");

export const Text = (options?: TextOptions) => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(textOptionsKey, options, target, propertyKey);
};

export interface TextOptions extends TextModel, TextUi {
}
