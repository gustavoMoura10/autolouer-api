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
import AddressEntity from "./AddressEntity";
import VehicleRentEntity from "./VehicleRentEntity";
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

  @Column({
    length: 500,
    nullable: true,
  })
  photo?: string;

  @Column({
    length: 500,
    nullable: true,
  })
  licensePhoto?: string;
  @Column({
    length: 50,
    nullable: true,
  })
  license?: string;

  @OneToOne(() => AddressEntity, { eager: true, cascade: true, nullable: true })
  @JoinColumn({
    name: "address_id",
    referencedColumnName: "id",
  })
  address?: AddressEntity;

  @OneToMany(
    () => VehicleRentEntity,
    (vehicleRent: VehicleRentEntity) => vehicleRent.user,
    {
      cascade: true,
      eager: true,
    }
  )
  vehicleRents?: VehicleRentEntity[];

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
    firstName: string,
    lastName: string,
    email: string,
    document: string,
    birthdate: Date,
    password?: string,
    address?: AddressEntity,
    photo?: string,
    licensePhoto?: string,
    license?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.document = document;
    this.password = password;
    this.birthdate = birthdate;
    this.address = address;
    this.photo = photo;
    this.licensePhoto = licensePhoto;
    this.license = license;
  }
}
