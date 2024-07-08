import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import VehicleModelEntity from "./VehicleModelEntity";

@Entity("brand")
export default class BrandEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    length: 100,
    nullable: false,
  })
  name: string;
  @Column({
    name: "foundation_date",
    nullable: false,
  })
  foundationDate: Date;
  @Column({
    nullable: false,
    length: 3,
  })
  country: string;
  @Column({
    length: 1000,
    nullable: true,
  })
  bio?: string;
  @OneToMany(() => VehicleModelEntity, (vehicleModel) => vehicleModel.brand)
  vehicleModels?: VehicleModelEntity[];
  @Column({
    length: 500,
    nullable: true,
  })
  photo?: string;
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

  constructor(name: string, foundationDate: Date, country: string) {
    this.name = name;
    this.foundationDate = foundationDate;
    this.country = country;
  }
}
