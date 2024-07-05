import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AddressEntity } from "./AddressEntity";
@Entity("user")
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    name: "first_name",
    length: 100,
    nullable: false,
  })
  firstName: string;

  @Column({
    name: "last_name",
    length: 100,
    nullable: false,
  })
  lastName: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
    select: false,
  })
  password?: string;

  @Column({
    nullable: false,
  })
  birthdate: Date;

  @Column({
    length: 14,
    nullable: false,
    unique: true,
  })
  document: string;

  @OneToOne(() => AddressEntity, { eager: true, cascade: true, nullable: true })
  @JoinColumn({
    name: "address_id",
    referencedColumnName: "id",
  })
  address?: AddressEntity;

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
    firstName: string,
    lastName: string,
    email: string,
    document: string,
    birthdate: Date,
    password?: string,
    address?: AddressEntity
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.document = document;
    this.password = password;
    this.birthdate = birthdate;
    this.address = address;
  }
}
