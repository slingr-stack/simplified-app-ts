export interface ActionModel {
    type: 'record' | 'manyRecords' | 'entity' | 'global';
    entity?: any,
    executeInBackground?: boolean;
}