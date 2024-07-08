import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import VehicleEntity from "./VehicleEntity";

@Entity("vehicle_color")
export default class VehicleColorEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 50,
    nullable: false,
  })
  name: string;

  @OneToMany(
    () => VehicleEntity,
    (vehicle: VehicleEntity) => vehicle.vehicleColor,
    {
      cascade: true,
      eager: true,
    }
  )
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
