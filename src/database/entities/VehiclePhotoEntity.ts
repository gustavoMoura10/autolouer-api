import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import VehicleEntity from "./VehicleEntity";

@Entity("vehicle_photo")
export default class VehiclePhotoEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 500,
    nullable: true,
  })
  url: string;
  @ManyToOne(() => VehicleEntity, (vehicle:VehicleEntity)=> vehicle.vehiclePhotos)
  @JoinColumn({
    name: "vehicle_id",
    referencedColumnName: "id",
  })
  vehicle: VehicleEntity;

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
  constructor(url: string, vehicle: VehicleEntity) {
    this.url = url;
    this.vehicle = vehicle;
  }
}