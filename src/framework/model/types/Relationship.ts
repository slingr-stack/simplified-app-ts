import "reflect-metadata";

const relationshipOptionsKey = Symbol("relationshipOptions");

export const Relationship = (options?: RelationshipOptions) => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(relationshipOptionsKey, options, target, propertyKey);
};

export interface RelationshipOptions {
    filter?: (query: any) => void;
}
