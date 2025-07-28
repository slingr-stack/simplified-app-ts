import "reflect-metadata";
import { HtmlUi } from "../../ui/types/HtmlUi";
import { HtmlModel } from "../../model/types/HtmlModel";

const htmlOptionsKey = Symbol("htmlOptions");

export const Html = (options?: HtmlOptions) => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(htmlOptionsKey, options, target, propertyKey);
};

export interface HtmlOptions extends HtmlModel, HtmlUi {
}
