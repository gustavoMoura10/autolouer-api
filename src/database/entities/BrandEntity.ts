import { Entity } from "typeorm";

@Entity("brand")
export default class BrandEntity {
  id!: number;
}
