import { Entity } from "../../framework/shared/Entity";
import { Field } from "../../framework/shared/Field";
import { AutoIncremental } from "../../framework/model/db/AutoIncremental";
import { Text } from "../../framework/shared/types/Text";
import { LongText } from "../../framework/shared/types/LongText";
import { BaseEntity } from "typeorm";
import { Choice } from "../../framework/shared/types/Choice";

@Entity({
    label: 'Projects',
    persistent: true
})
export class Project extends BaseEntity {
    @Field({
        label: "ID"
    })
    @AutoIncremental()
    id!: number;


    @Field({
        label: "Name",        
        required: true,
        useAsLabel: true
    })
    @Text()
    name!: string;


    @Field({
        label: "Status",
        required: true,
    })
    @Choice<Status>({
        labels: {
            active: "Active",
            inactive: "Inactive"
        }
    })
    status: Status = Status.Active;    

    
    @Field({
        label: "Description"
    })
    @LongText()
    description!: string;
}

export enum Status {
    Active = "active",
    Inactive = "inactive"
}
