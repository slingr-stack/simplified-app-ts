import { Action } from "../../../framework/shared/Action";
import { Project, Status } from "../../entities/Project";

@Action({
    label: 'Deactivate',
    type: 'record',
    entity: Project
})
export class Deactivate {
    precondition(project: Project) {
        return project.status == Status.Active
    }

    execute(project: Project) {
        project.status = Status.Inactive;
        project.save();
    }
}