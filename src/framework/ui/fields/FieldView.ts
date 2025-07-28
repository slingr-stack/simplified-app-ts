import { FieldUi } from "./FieldUi";

export interface FieldView<T> extends FieldUi {
    field: keyof T
}