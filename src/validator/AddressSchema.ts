import Joi, { custom } from "joi";
import { regexAlpha } from "../utils/regex";

const createSchema = Joi.object({
  number: Joi.number().required(),
  street: Joi.string().regex(regexAlpha).min(2).max(255).required(),
  complement: Joi.string().regex(regexAlpha).min(2).max(255).required(),
  neighbourhood: Joi.string().regex(regexAlpha).min(2).max(255).required(),
  city: Joi.string().regex(regexAlpha).min(2).max(255).required(),
  district: Joi.string().regex(regexAlpha).min(2).max(255).required(),
  country: Joi.string().regex(regexAlpha).min(2).max(3).required(),
});

export default class AddressSchema {
  public async create(body: Object): Promise<any> {
    try {
      await createSchema.validateAsync(body);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
