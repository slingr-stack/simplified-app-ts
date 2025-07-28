import "reflect-metadata";
import { RelationshipModel } from "../../model/types/RelationshipModel";
import { RelationshipUi } from "../../ui/types/RelationshipUi";

const relationshipOptionsKey = Symbol("relationshipOptions");

export const Relationship = (options?: RelationshipOptions) => (target: any, propertyKey: string) => {
    Reflect.defineMetadata(relationshipOptionsKey, options, target, propertyKey);
};

export interface RelationshipOptions extends RelationshipModel, RelationshipUi {
}
