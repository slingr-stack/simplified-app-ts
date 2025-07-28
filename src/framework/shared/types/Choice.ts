import "reflect-metadata";
import { ChoiceUi } from "../../ui/types/ChoiceUi";
import { ChoiceModel } from "../../model/types/ChoiceModel";

const choiceOptionsKey = Symbol("choiceOptions");

export function Choice<K extends string>(options?: ChoiceOptions<K>) {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata(choiceOptionsKey, options, target, propertyKey);
    }
}

export interface ChoiceOptions<K extends string> extends ChoiceModel, ChoiceUi<K> {
}
