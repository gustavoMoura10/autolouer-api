import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("vehicle_photo")
export default class VehiclePhotoEntity {
  @PrimaryGeneratedColumn()
  id!: number;
}