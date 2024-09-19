import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import CountryEntity from "./CountryEntity";
import VehicleModelEntity from "./VehicleModelEntity";

@Entity("vehicle_type")
export default class VehicleTypeEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 50,
    nullable: false,
  })
  name: string;

  @ManyToMany(
    () => VehicleModelEntity,
    (vehicleModel: VehicleModelEntity) => vehicleModel.vehicleTypes
  )
  @JoinTable({
    name: "vehicle_model_vechicle_type",
    joinColumns: [{ name: "vehicle_type_id", referencedColumnName: "id" }],
    inverseJoinColumns: [
      { name: "vehicle_model_id", referencedColumnName: "id" },
    ],
  })
  vehicleModels?: VehicleModelEntity[];
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
