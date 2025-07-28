import "reflect-metadata";
import { Entity } from "typeorm/decorator/entity/Entity";

export function Persistent(): ClassDecorator {
  return Entity();
}