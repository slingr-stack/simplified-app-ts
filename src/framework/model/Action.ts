import "reflect-metadata";

const actionOptionsKey = Symbol("actionOptions");

export const Action = (options?: ActionOptions): ClassDecorator => {
    return (target: Function) => {
        Reflect.defineMetadata(actionOptionsKey, options, target);
    }
};

export interface ActionOptions {
    type: 'record' | 'manyRecords' | 'entity' | 'global';
    entity?: any,
    executeInBackground?: boolean;
}