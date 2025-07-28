import { FieldView } from "../fields/FieldView";

export abstract class BaseEntityView<T> {
    abstract getFields(): FieldView<T>[];
}