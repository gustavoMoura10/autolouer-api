import BrandEntity from "../database/entities/BrandEntity";
import Brand from "./Brand";

type Country = {
  id: number;
  name: string;
  code: string;
  brands?: Brand[] | BrandEntity[] | null;
};

export default Country;
