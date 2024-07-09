import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import VehicleModelEntity from "./VehicleModelEntity";
import Country from "../../types/Country";
import CountryEntity from "./CountryEntity";

@Entity("brand")
export default class BrandEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    length: 100,
    nullable: false,
  })
  name: string;
  @Column({
    name: "foundation_date",
    nullable: false,
  })
  foundationDate: Date;
  @ManyToOne(() => CountryEntity, (country: CountryEntity) => country.brands, {
    nullable: false,
  })
  @JoinColumn({
    name: "country_id",
    referencedColumnName: "id",
  })
  country: Country;
  @Column({
    length: 1000,
    nullable: true,
  })
  bio?: string;
  @OneToMany(() => VehicleModelEntity, (vehicleModel) => vehicleModel.brand)
  vehicleModels?: VehicleModelEntity[];
  @Column({
    length: 500,
    nullable: true,
  })
  photo?: string;
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

  constructor(name: string, foundationDate: Date, country: Country) {
    this.name = name;
    this.foundationDate = foundationDate;
    this.country = country;
  }
}
