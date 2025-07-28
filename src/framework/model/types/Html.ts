import "reflect-metadata";

const htmlOptionsKey = Symbol("htmlOptions");

export const Html = (options?: HtmlOptions) => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(htmlOptionsKey, options, target, propertyKey);
};

export interface HtmlOptions {
}
