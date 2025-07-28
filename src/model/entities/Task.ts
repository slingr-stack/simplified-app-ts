import { Entity } from "../../framework/shared/Entity";
import { Field } from "../../framework/shared/Field";
import { AutoIncremental } from "../../framework/model/db/AutoIncremental";
import { Text } from "../../framework/shared/types/Text";
import { Project, Status as ProjectStatus } from "./Project";
import { Relationship } from "../../framework/shared/types/Relationship";
import { Integer } from "../../framework/shared/types/Integer";
import { Html } from "../../framework/shared/types/Html";
import { BaseEntity } from "typeorm";
import { Choice } from "../../framework/shared/types/Choice";

@Entity({
    label: 'Tasks',
    persistent: true
})
export class Task extends BaseEntity {
    @Field({
        label: "Label",
        useAsLabel: true,
        calculation: (task: Task) => {
            return `#${task.number}. ${task.title}`;
        }
    })
    @Text()
    label!: string;


    @Field({
        label: "Project",
        required: true
    })
    @Relationship({
        filter: (query) => {
            query.status = ProjectStatus.Active;
        }
    })
    project!: Project;


    @Field({
        label: "Number"
    })
    @AutoIncremental()
    number!: number;


    @Field({
        label: "Title",
        required: true
    })
    @Text()
    title!: string;


    @Field({
        label: "Status",
        required: true,
    })
    @Choice<Status>({
        labels: {
            toDo: "To Do",
            inProgress: "In Progress",
            done: "Done"
        }
    })
    status: Status = Status.ToDo;


    @Field({
        label: "Type",
        required: true,
    })
    @Choice<Type>({
        labels: {
            feature: "Feature",
            bug: "Bug",
            release: "Release"
        }
    })
    type: Type = Type.Feature;


    @Field({
        label: "Release Number",
        required: true,
        access: (task: Task) => {
            return task.type === Type.Release;
        }
    })
    @Integer({
        positive: true
    })
    releaseNumber!: number;


    @Field({
        label: "Description"
    })
    @Html()
    description!: string;
}

export enum Status {
    ToDo = "toDo",
    InProgress = "inProgress",
    Done = "done"
}

export enum Type {
    Feature = "feature",
    Bug = "bug",
    Release = "release"
}