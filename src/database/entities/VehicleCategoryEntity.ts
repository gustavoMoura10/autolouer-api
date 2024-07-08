import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import VehicleEntity from "./VehicleEntity";

@Entity("vehicle_category")
export default class VehicleCategoryEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100,
    nullable: true,
  })
  name: string;
  @OneToMany(() => VehicleEntity, (vehicle) => vehicle.vehicleCategory, {
    cascade: true,
    eager: true,
  })
  vehicles?: VehicleEntity[];

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
  constructor(name: string) {
    this.name = name;
  }
}
