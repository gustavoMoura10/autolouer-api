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
import VehicleRentEntity from "./VehicleRentEntity";
@Entity("payment_method")
export default class PaymentMethodEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 50,
    nullable: false,
  })
  name: string;

  @OneToMany(
    () => VehicleRentEntity,
    (vehicleRent: VehicleRentEntity) => vehicleRent.paymentMethod,
    {
      cascade: true,
      eager: true,
    }
  )
  vehicleRents?: VehicleEntity[];

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
