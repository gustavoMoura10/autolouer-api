import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import BrandEntity from "./BrandEntity";
import VehicleModelEntity from "./VehicleModelEntity";
import VehiclePhotoEntity from "./VehiclePhotoEntity";
import FuelEntity from "./VehicleFuelEntity";
import VehicleFuelEntity from "./VehicleFuelEntity";
import VehicleColorEntity from "./VehicleColorEntity";
import VehicleDirectionEntity from "./VehicleDirectionEntity";
import VehicleTransmissionEntity from "./VehicleTransmissionEntity";
import VehicleCategoryEntity from "./VehicleCategoryEntity";
import VehicleRentEntity from "./VehicleRentEntity";

@Entity("vehicle")
export default class VehicleEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    nullable: false,
    type: "int",
  })
  year: number;
  @Column({
    length: 1000,
    nullable: false,
  })
  description: string;
  @Column({
    nullable: false,
    type: "float",
  })
  mileage: number;
  @Column({
    name: "motor_power",
    type: "float",
    nullable: false,
  })
  motorPower: number;

  @ManyToOne(() => VehicleFuelEntity, (vehicleFuel) => vehicleFuel.vehicles)
  @JoinColumn({
    name: "vehicle_fuel_id",
    referencedColumnName: "id",
  })
  vehicleFuel: VehicleFuelEntity;
  @ManyToOne(
    () => VehicleColorEntity,
    (vehicleCategory) => vehicleCategory.vehicles
  )
  @JoinColumn({
    name: "vehicle_category_id",
    referencedColumnName: "id",
  })
  vehicleCategory: VehicleCategoryEntity;

  @ManyToOne(() => VehicleColorEntity, (vehicleColor) => vehicleColor.vehicles)
  @JoinColumn({
    name: "vehicle_color_id",
    referencedColumnName: "id",
  })
  vehicleColor: VehicleColorEntity;

  @Column({
    type: "int",
    nullable: false,
  })
  doors: number;

  @Column({
    name: "vehicle_plate",
    length: 10,
    nullable: false,
  })
  vehiclePlate: string;

  @Column({
    nullable: false,
    default: false,
  })
  rented?: boolean;

  @ManyToOne(
    () => VehicleColorEntity,
    (vehicleDirection) => vehicleDirection.vehicles
  )
  @JoinColumn({
    name: "vehicle_direction_id",
    referencedColumnName: "id",
  })
  vehicleDirection: VehicleDirectionEntity;

  @ManyToOne(
    () => VehicleTransmissionEntity,
    (vehicleTransmission) => vehicleTransmission.vehicles
  )
  @JoinColumn({
    name: "vehicle_transmission_id",
    referencedColumnName: "id",
  })
  vehicleTransmission: VehicleTransmissionEntity;

  @ManyToOne(
    () => VehicleModelEntity,
    (vehicleModel: VehicleModelEntity) => vehicleModel.vehicles
  )
  @JoinColumn({
    name: "vehicle_model_id",
    referencedColumnName: "id",
  })
  vehicleModel: VehicleModelEntity;

  @OneToMany(() => VehicleRentEntity, (vehicleRent) => vehicleRent.vehicle)
  vehicleRents?: VehicleRentEntity[];

  @OneToMany(() => VehiclePhotoEntity, (vehiclePhoto) => vehiclePhoto.vehicle, {
    cascade: true,
    eager: true,
    onDelete: "CASCADE", // delete related rents when vehicle is deleted
  })
  vehiclePhotos?: VehiclePhotoEntity[];

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
    year: number,
    description: string,
    mileage: number,
    motorPower: number,
    vehicleFuel: VehicleFuelEntity,
    vehicleColor: VehicleColorEntity,
    doors: number,
    vehiclePlate: string,
    vehicleCategory: VehicleCategoryEntity,
    vehicleDirection: VehicleDirectionEntity,
    vehicleTransmission: VehicleTransmissionEntity,
    vehicleModel: VehicleModelEntity,
    vehiclePhotos?: VehiclePhotoEntity[]
  ) {
    this.year = year;
    this.description = description;
    this.mileage = mileage;
    this.motorPower = motorPower;
    this.vehicleFuel = vehicleFuel;
    this.vehicleColor = vehicleColor;
    this.doors = doors;
    this.vehiclePlate = vehiclePlate;
    this.vehicleDirection = vehicleDirection;
    this.vehicleTransmission = vehicleTransmission;
    this.vehicleModel = vehicleModel;
    this.vehicleCategory = vehicleCategory;
    this.vehiclePhotos = vehiclePhotos;
  }
}
