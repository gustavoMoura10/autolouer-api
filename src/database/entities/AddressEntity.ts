import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("address")
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    nullable: false,
    type: "int",
  })
  number: number;

  @Column({
    nullable: false,
    length: 255,
  })
  street: string;
  @Column({
    nullable: false,
    length: 255,
  })
  complement: string;
  @Column({
    nullable: false,
    length: 255,
  })
  neighbourhood: string;
  @Column({
    nullable: false,
    length: 255,
  })
  city: string;
  @Column({
    nullable: false,
    length: 255,
  })
  district: string;
  @Column({
    nullable: false,
    length: 3,
  })
  country: string;
  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    name: "created_at",
  })
  createdAt!: Date;
  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
    name: "updated_at",
  })
  updatedAt!: Date;
  @Column({
    type: "timestamp",
    default: null,
    name: "deleted_at",
  })
  deletedAt!: Date;

  constructor(
    number: number,
    street: string,
    complement: string,
    neighbourhood: string,
    city: string,
    district: string,
    country: string
  ) {
    this.number = number;
    this.street = street;
    this.complement = complement;
    this.neighbourhood = neighbourhood;
    this.city = city;
    this.district = district;
    this.country = country;
  }
}
