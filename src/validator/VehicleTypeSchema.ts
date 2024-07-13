import Joi, { custom } from "joi";
import validateCPFCNPJ from "../utils/validateCPFCNPJ";
import { regexPassword } from "../utils/regex";

export default class VehicleTypeSchema {
  static createSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    country: Joi.alternatives().try(Joi.object(), Joi.number()).required(),
  });
}
