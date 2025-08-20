export interface RelationshipModel {
    type?: "Composition" | "Aggregation" | "Association";
    filter?: (query: any) => void;
}
