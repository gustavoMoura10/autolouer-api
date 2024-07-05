import { Entity } from "typeorm";

@Entity("vehicle_photo")
export default class VehiclePhotoEntity {
  id!: number;
}