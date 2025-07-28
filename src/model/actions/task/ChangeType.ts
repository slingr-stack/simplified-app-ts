import { Action } from "../../../framework/shared/Action";
import { Entity } from "../../../framework/shared/Entity";
import { Field } from "../../../framework/shared/Field";
import { Status, Task, Type } from "../../entities/Task";

@Entity()
export class ChangeTypeParams {
    @Field({
        label: 'Type',
        required: true
    })
    type!: Type;
}


@Action({
    label: 'Change type',
    type: 'record',
    entity: Task
})
export class ChangeType {
    execute(task: Task, params: ChangeTypeParams) {
        task.type = params.type;
        task.save();
    }
}