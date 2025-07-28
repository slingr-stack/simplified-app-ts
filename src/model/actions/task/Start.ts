import { Action } from "../../../framework/model/Action";
import { Status, Task } from "../../entities/Task";

@Action({
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