import "reflect-metadata";
import { EntityModel } from "../model/EntityModel";
import { EntityUi } from "../ui/EntityUi";

const entityOptionsKey = Symbol("entityOptions");

/**
 * Marks a class as an entity.
 * This decorator also helps with TypeScript's `strictPropertyInitialization` rule.
 * By returning a constructor that can be called without arguments, it signals
 * to the compiler that the entity's properties will be initialized by the framework,
 * thus avoiding errors about properties not being initialized in the constructor.
 * It preserves static members of the class.
 */
export const Entity = (options?: EntityOptions) => <T extends { new (...args: any[]): any }>(target: T): { new (): InstanceType<T> } & T => {
    Reflect.defineMetadata(entityOptionsKey, options, target);
    return target as any;
};

export interface EntityOptions extends EntityModel, EntityUi {
}
