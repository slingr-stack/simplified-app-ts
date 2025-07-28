import { BaseEntityView } from "../../framework/ui/views/BaseEntityView";
import { FieldView } from "../../framework/ui/fields/FieldView";
import { Task } from "../../model/entities/Task";
import { EntityView } from "../../framework/ui/views/EntityView";

@EntityView({
    label: 'Create task',
    entity: Task,
    operation: 'create',
    managed: false
})
export class Create extends BaseEntityView<Task> {
    getFields(): FieldView<Task>[] {
        return [
            {
                field: 'title'
            }, {
                field: 'status'
            }, {
                field: 'description'
            }
        ];
    }
}