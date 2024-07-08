import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("address")
export default class AddressEntity {
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
    name: "zip_code",
    nullable: true,
    length: 20,
  })
  zipCode?: string;
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
    number: number,
    street: string,
    complement: string,
    neighbourhood: string,
    city: string,
    district: string,
    country: string,
    zipCode?: string,
  ) {
    this.number = number;
    this.street = street;
    this.complement = complement;
    this.neighbourhood = neighbourhood;
    this.city = city;
    this.district = district;
    this.country = country;
    this.zipCode = zipCode;
  }
}
