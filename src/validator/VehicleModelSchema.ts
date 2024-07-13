import Joi, { custom } from "joi";
import validateCPFCNPJ from "../utils/validateCPFCNPJ";
import { regexPassword } from "../utils/regex";

export default class VehicleModelSchema {
  static createSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    vehicleType: Joi.array()
      .items(Joi.alternatives().try(Joi.object(), Joi.number()))
      .required(),
    brand: Joi.alternatives().try(Joi.object(), Joi.number()).required(),
    bio: Joi.string().optional(),
    photo: Joi.alternatives().try(Joi.object(), Joi.string()).optional(),
  });
}
