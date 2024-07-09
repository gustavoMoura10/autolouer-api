import Joi, { custom } from "joi";
import { regexAlpha } from "../utils/regex";

const brandSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  foundationDate: Joi.date().required(),
  country: Joi.alternatives().try(Joi.object(), Joi.number()).required(),
  bio: Joi.string().min(2).max(1000).optional(),
  photo: Joi.alternatives().try(Joi.object(), Joi.string()).optional()
});

export default class BrandSchema {
  public async create(body: Object): Promise<any> {
    try {
      await brandSchema.validateAsync(body);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
