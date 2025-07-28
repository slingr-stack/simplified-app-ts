import { Action } from "../../../framework/model/Action";
import { Entity } from "../../../framework/model/Entity";
import { Field } from "../../../framework/model/Field";
import { Status, Task, Type } from "../../entities/Task";

@Entity()
export class ChangeTypeParams {
    @Field({
        required: true
    })
    type!: Type;
}


@Action({
    type: 'record',
    entity: Task
})
export class ChangeType {
    execute(task: Task, params: ChangeTypeParams) {
        task.type = params.type;
        task.save();
    }
}