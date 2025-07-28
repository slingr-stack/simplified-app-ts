import { Action } from "../../../framework/shared/Action";
import { Status, Task } from "../../entities/Task";

@Action({
    label: 'Start',
    type: 'record',
    entity: Task
})
export class Start {
    precondition(task: Task) {
        return task.status = Status.ToDo;
    }

    execute(task: Task) {
        task.status = Status.InProgress;
        task.save();
    }
}