import "reflect-metadata";

const choiceUiOptionsKey = Symbol("choiceUiOptions");

export function ChoiceUi<K extends string>(options?: ChoiceUiOptions<K>) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata(choiceUiOptionsKey, options, target, propertyKey);
    }
}

export interface ChoiceUiOptions<K extends string> {
    labels: {
        [Key in K]: string;
    }
}
