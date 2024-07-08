import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import BrandEntity from "./BrandEntity";
import VehicleEntity from "./VehicleEntity";

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
  @CreateDateColumn({
    name: "created_at",
  })
  createdAt!: Date;

  @OneToMany(
    () => VehicleEntity,
    (vehicle: VehicleEntity) => vehicle.vehicleModel,
    {
      cascade: true,
      eager: true,
      onDelete: "CASCADE",
    }
  )
  vehicles?: VehicleEntity[];
  @UpdateDateColumn({
    name: "updated_at",
  })
  updatedAt!: Date;
  @DeleteDateColumn({
    name: "deleted_at",
  })
  deletedAt!: Date;
  constructor(name: string, brand: BrandEntity, bio?: string, photo?: string) {
    this.name = name;
    this.brand = brand;
    this.bio = bio;
    this.photo = photo;
  }
}
