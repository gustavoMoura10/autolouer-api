import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import CountryEntity from "./CountryEntity";

@Entity("vehicle_type")
export default class VehicleTypeEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 50,
    nullable: false,
  })
  name: string;

  @OneToOne(() => CountryEntity, { eager: true, cascade: true, nullable: true })
  @JoinColumn({
    name: "country_id",
    referencedColumnName: "id",
  })
  country: CountryEntity;
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
  constructor(name: string, country: CountryEntity) {
    this.name = name;
    this.country = country;
  }
}
