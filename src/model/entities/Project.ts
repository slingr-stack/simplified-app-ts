import { Entity } from "../../framework/model/Entity";
import { Field } from "../../framework/model/Field";
import { AutoIncremental } from "../../framework/model/db/AutoIncremental";
import { Persistent } from "../../framework/model/db/Persistent";
import { Text } from "../../framework/model/types/Text";
import { LongText } from "../../framework/model/types/LongText";
import { BaseEntity } from "typeorm";
import { RecordLabel } from "../../framework/ui/RecordLabel";
import { FieldUi } from "../../framework/ui/FieldUi";
import { ChoiceUi } from "../../framework/ui/types/ChoiceUi";

@Persistent()
@Entity()
export class Project extends BaseEntity {
    @FieldUi({
        label: "ID"
    })
    @AutoIncremental()
    @Field()
    id!: number;


    @FieldUi({
        label: "Name"
    })
    @RecordLabel()
    @Text()
    @Field({
        required: true
    })
    name!: string;


    @ChoiceUi<Status>({
        labels: {
            active: "Active",
            inactive: "Inactive"
        }
    })
    @FieldUi({
        label: "Status"
    })
    @Field({
        required: true,
    })
    status: Status = Status.Active;    

    
    @FieldUi({
        label: "Description"
    })
    @LongText()
    @Field()
    description!: string;
}

export enum Status {
    Active = "active",
    Inactive = "inactive"
}
