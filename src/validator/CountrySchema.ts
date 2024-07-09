import Joi, { custom } from "joi";
import { regexAlpha } from "../utils/regex";

const countrySchema = Joi.object({
  name: Joi.string().regex(regexAlpha).min(2).max(50).required(),
  code: Joi.string().alphanum().min(3).max(3).required(),
});

export default class CountrySchema {
  public async create(body: Object): Promise<any> {
    try {
      await countrySchema.validateAsync(body);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
