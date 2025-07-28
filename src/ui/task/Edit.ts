import { BaseEntityView } from "../../framework/ui/views/BaseEntityView";
import { FieldView } from "../../framework/ui/fields/FieldView";
import { Task } from "../../model/entities/Task";
import { EntityView } from "../../framework/ui/views/EntityView";

@EntityView({
    label: 'Edit task',
    entity: Task,
    operation: 'edit',
    managed: true
})
export class Details extends BaseEntityView<Task> {
    getFields(): FieldView<Task>[] {
        return []; // managed view
    }
}