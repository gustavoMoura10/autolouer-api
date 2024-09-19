import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import BrandEntity from "./BrandEntity";
import VehicleEntity from "./VehicleEntity";
import VehicleTypeEntity from "./VehicleTypeEntity";

@Entity("vehicle_model")
export default class VehicleModelEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    length: 100,
    nullable: false,
  })
  name: string;
  @Column({
    length: 500,
    nullable: true,
  })
  bio?: string;
  @Column({
    length: 500,
    nullable: true,
  })
  photo?: string;
  @OneToOne(() => BrandEntity, (brand: BrandEntity) => brand.vehicleModels)
  @JoinColumn({
    name: "brand_id",
    referencedColumnName: "id",
  })
  brand: BrandEntity;


  @OneToMany(
    () => VehicleEntity,
    (vehicle: VehicleEntity) => vehicle.vehicleModel,
    {
      cascade: true,
      onDelete: "CASCADE",
    }
  )
  vehicles?: VehicleEntity[];

  @ManyToMany(
    () => VehicleTypeEntity,
    (vehicleType) => vehicleType.vehicleModels
  )
  @JoinTable({
    name: "vehicle_model_vechicle_type",
    joinColumns: [{ name: "vehicle_model_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "vehicle_type_id", referencedColumnName: "id" }],
  })
  vehicleTypes: VehicleTypeEntity[];

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
  constructor(
    name: string,
    brand: BrandEntity,
    vehicleTypes: VehicleTypeEntity[],
    bio?: string,
    photo?: string
  ) {
    this.name = name;
    this.brand = brand;
    this.vehicleTypes = vehicleTypes;
    this.bio = bio;
    this.photo = photo;
  }
}
