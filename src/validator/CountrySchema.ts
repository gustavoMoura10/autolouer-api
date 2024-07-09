import Joi, { custom } from "joi";
import { regexAlpha } from "../utils/regex";

export default class CountrySchema {
  public static createSchema = Joi.object({
    name: Joi.string().regex(regexAlpha).min(2).max(50).required(),
    code: Joi.string().alphanum().min(3).max(3).required(),
  });
}
