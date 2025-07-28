import { Persistent } from "../../framework/model/db/Persistent";
import { Entity } from "../../framework/model/Entity";
import { Field } from "../../framework/model/Field";
import { AutoIncremental } from "../../framework/model/db/AutoIncremental";
import { Text } from "../../framework/model/types/Text";
import { Project, Status as ProjectStatus } from "./Project";
import { Relationship } from "../../framework/model/types/Relationship";
import { Integer } from "../../framework/model/types/Integer";
import { Html } from "../../framework/model/types/Html";
import { BaseEntity } from "typeorm";
import { RecordLabel } from "../../framework/ui/RecordLabel";
import { FieldUi } from "../../framework/ui/FieldUi";
import { ChoiceUi } from "../../framework/ui/types/ChoiceUi";
import { Choice } from "../../framework/model/types/Choice";

@Persistent()
@Entity()
export class Task extends BaseEntity {
    @FieldUi({
        label: "Label"
    })
    @RecordLabel()
    @Text()
    @Field({
        calculation: (task: Task) => {
            return `#${task.number}. ${task.title}`;
        }
    })
    label!: string;


    @FieldUi({
        label: "Project"
    })
    @Relationship({
        filter: (query) => {
            query.status = ProjectStatus.Active;
        }
    })
    @Field({
        required: true
    })
    project!: Project;


    @FieldUi({
        label: "Number"
    })
    @AutoIncremental()
    @Field()
    number!: number;


    @FieldUi({
        label: "Title"
    })
    @Text()
    @Field({
        required: true
    })
    title!: string;


    @ChoiceUi<Status>({
        labels: {
            toDo: "To Do",
            inProgress: "In Progress",
            done: "Done"
        }
    })
    @FieldUi({
        label: "Status"
    })
    @Field({
        required: true,
    })
    status: Status = Status.ToDo;


    @ChoiceUi<Type>({
        labels: {
            feature: "Feature",
            bug: "Bug",
            release: "Release"
        }
    })
    @FieldUi({
        label: "Type"
    })
    @Choice()
    @Field({
        required: true,
    })
    type: Type = Type.Feature;


    @FieldUi({
        label: "Release Number"
    })
    @Integer({
        positive: true
    })
    @Field({
        required: true,
        access: (task: Task) => {
            return task.type === Type.Release;
        }
    })
    releaseNumber!: number;

    
    @FieldUi({
        label: "Description"
    })
    @Html()
    @Field()
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