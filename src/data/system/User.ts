import { Entity } from "../../framework/shared/Entity";
import { Field } from "../../framework/shared/Field";
import { AutoIncremental } from "../../framework/model/db/AutoIncremental";
import { Text } from "../../framework/shared/types/Text";
import { LongText } from "../../framework/shared/types/LongText";
import { BaseEntity } from "typeorm";
import { Choice } from "../../framework/shared/types/Choice";
import { Integer } from "../../framework/shared/types/Integer";

@Entity({
  label: "User",
  persistent: true,
})
export class User extends BaseEntity {
  @Field({
    label: "Name",
    required: true,
    useAsLabel: true,
  })
  @Text()
  name!: string;
  @Field({
    label: "Description",
  })
  @LongText()
  description!: string;
  @Field({
    label: "Status",
    required: true,
  })
  @Choice<Status>({
    labels: {
      active: "Active",
      inactive: "Inactive",
    },
  })
  status: Status = Status.Active;
  @Field({
    label: "ID",
  })
  @Integer()
  @AutoIncremental()
  id!: number;
}

export enum Status {
  Active = "active",
  Inactive = "inactive",
}