import { Action } from "../../../framework/shared/Action";
import { Status, Task } from "../../entities/Task";

@Action({
    label: 'Complete',
    type: 'record',
    entity: Task
})
export class Complete {
    precondition(task: Task) {
        return task.status = Status.InProgress;
    }

    execute(task: Task) {
        task.status = Status.Done;
        task.save();
    }
}