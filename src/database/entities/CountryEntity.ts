import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import BrandEntity from "./BrandEntity";

@Entity("country")
export default class CountryEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 50,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    length: 3,
    nullable: false,
    unique: true,
  })
  code: string;

  @OneToMany(() => BrandEntity, (brand: BrandEntity) => brand.country, {
    cascade: true,
    eager: true,
  })
  brands?: BrandEntity[];
  
  @CreateDateColumn({
    name: "created_at",
  })
  createdAt!: Date;
  @UpdateDateColumn({
    name: "updated_at",
  })
  updatedAt!: Date;
  @DeleteDateColumn({
    name: "deleted_at",
  })
  deletedAt!: Date;
  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
  }
}
