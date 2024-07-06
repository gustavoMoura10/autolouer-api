import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("brand")
export default class BrandEntity {
  @PrimaryGeneratedColumn()
  id!: number;
}
