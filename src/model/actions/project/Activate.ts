import { Action } from "../../../framework/shared/Action";
import { Project, Status } from "../../entities/Project";

@Action({
    label: 'Activate',
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