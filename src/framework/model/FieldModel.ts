export interface FieldModel {
    required?: boolean;
    calculation?: (data: any) => any;
    access?: (data: any) => boolean | Access;
}

export enum Access {
    ReadOnly = "readOnly",
    ReadWrite = "readWrite",
    None = "none"
}