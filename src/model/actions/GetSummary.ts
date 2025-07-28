import { Action } from "../../framework/model/Action";
import { Entity } from "../../framework/model/Entity";
import { Field } from "../../framework/model/Field";
import { Relationship } from "../../framework/model/types/Relationship";
import { Project, Status } from "../entities/Project";

@Entity({
    type: 'global'
})
export class GetSummaryParams {
    @Relationship({
        filter: (query) => {
            query.status = Status.Active;
        }
    })
    @Field({
        required: true
    })
    project!: Project;
}

@Action()
export class GetSummary {
    execute(params: GetSummaryParams) {
        // TODO
        return {};
    }
}