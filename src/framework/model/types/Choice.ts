import "reflect-metadata";

const choiceOptionsKey = Symbol("choiceOptions");

export const Choice = (options?: ChoiceOptions) => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(choiceOptionsKey, options, target, propertyKey);
};

export interface ChoiceOptions {
}
