import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import CountryEntity from "./CountryEntity";
import UserEntity from "./UserEntity";
import PaymentMethodEntity from "./PaymentMethodEntity";
import VehicleEntity from "./VehicleEntity";

@Entity("vehicle_rent")
export default class VehicleRentEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    name: "start_date",
    nullable: false,
  })
  startDate: Date;
  @Column({
    name: "end_date",
    nullable: false,
  })
  endDate: Date;
  @ManyToOne(
    () => PaymentMethodEntity,
    (paymentMethod: PaymentMethodEntity) => paymentMethod.vehicleRents
  )
  @JoinColumn({
    name: "payment_method_id",
    referencedColumnName: "id",
  })
  paymentMethod: PaymentMethodEntity;
  @ManyToOne(() => UserEntity, (user: UserEntity) => user.vehicleRents)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  user: UserEntity;
  @ManyToOne(
    () => VehicleEntity,
    (vehicle: VehicleEntity) => vehicle.vehicleRents
  )
  @JoinColumn({
    name: "vehicle_id",
    referencedColumnName: "id",
  })
  vehicle: VehicleEntity;

  @Column({
    name: "total_price",
    nullable: false,
    type: "decimal",
    precision: 2,
  })
  totalPrice: number;

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
    startDate: Date,
    paymentMethod: PaymentMethodEntity,
    user: UserEntity,
    vehicle: VehicleEntity,
    endDate: Date,
    totalPrice: number
  ) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.paymentMethod = paymentMethod;
    this.user = user;
    this.vehicle = vehicle;
    this.totalPrice = totalPrice;
  }
}
