import { Action } from "../../../framework/model/Action";
import { Project, Status } from "../../entities/Project";

@Action({
    type: 'record',
    entity: Project
})
export class Activate {
    precondition(project: Project) {
        return project.status == Status.Inactive
    }

    execute(project: Project) {
        project.status = Status.Active;
        project.save();
    }
}