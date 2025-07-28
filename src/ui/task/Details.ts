import { BaseEntityView } from "../../framework/ui/views/BaseEntityView";
import { FieldView } from "../../framework/ui/fields/FieldView";
import { Task } from "../../model/entities/Task";
import { EntityView } from "../../framework/ui/views/EntityView";

@EntityView({
    label: 'Task details',
    entity: Task,
    operation: 'readOnly',
    managed: true
})
export class Details extends BaseEntityView<Task> {
    getFields(): FieldView<Task>[] {
        return []; // managed view
    }
}