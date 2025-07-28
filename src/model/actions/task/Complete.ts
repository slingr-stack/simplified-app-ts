import { Action } from "../../../framework/model/Action";
import { Status, Task } from "../../entities/Task";

@Action({
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