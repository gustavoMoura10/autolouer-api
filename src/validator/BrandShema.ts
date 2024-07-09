import Joi, { custom } from "joi";
import { regexAlpha } from "../utils/regex";

export default class BrandSchema {
  public static createSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    foundationDate: Joi.date().required(),
    country: Joi.alternatives().try(Joi.object(), Joi.number()).required(),
    bio: Joi.string().min(2).max(1000).optional(),
    photo: Joi.alternatives().try(Joi.object(), Joi.string()).optional(),
  });
}
