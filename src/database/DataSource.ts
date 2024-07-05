import { DataSource } from "typeorm";
import * as path from "path";
const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_DATABASE_HOST,
  port: Number(process.env.PG_DATABASE_PORT),
  username: process.env.PG_DATABASE_USER,
  password: process.env.PG_DATABASE_PASSWORD,
  database: process.env.PG_DATABASE_DATABASE,
  synchronize: true,
  logging: true,
  entities: [path.join(__dirname, "entities/**/*.{j,t}s")],
  migrations: ["migrations/*.{j,t}s"],
  subscribers: ["subscriber/*.{j,t}s"],
});

export default AppDataSource;
