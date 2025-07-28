import { Action } from "../../framework/shared/Action";
import { Entity } from "../../framework/shared/Entity";
import { Field } from "../../framework/shared/Field";
import { Relationship } from "../../framework/shared/types/Relationship";
import { Project, Status } from "../entities/Project";

@Entity()
export class GetSummaryParams {
    @Relationship({
        filter: (query) => {
            query.status = Status.Active;
        }
    })
    @Field({
        label: 'Project',
        required: true
    })
    project!: Project;
}

@Action({
    label: 'Get summary',
    type: 'global'
})
export class GetSummary {
    async execute(params: GetSummaryParams) {
        // TODO
        return {};
    }
}