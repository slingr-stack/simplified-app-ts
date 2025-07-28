import "reflect-metadata";
import { ActionModel } from "../model/ActionModel";
import { ActionUi } from "../ui/ActionUi";

const actionOptionsKey = Symbol("actionOptions");

export const Action = (options?: ActionOptions): ClassDecorator => {
    return (target: Function) => {
        Reflect.defineMetadata(actionOptionsKey, options, target);
    }
};

export interface ActionOptions extends ActionModel, ActionUi {
}