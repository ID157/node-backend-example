import {Entity, Column} from "typeorm"
import { EntityBase } from "./base"

@Entity()
export class User extends EntityBase {
  @Column()
  name: string;
}
