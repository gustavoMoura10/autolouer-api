import Joi, { custom } from "joi";

const regexAllow = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const createSchema = Joi.object({
  number: Joi.number().required(),
  street: Joi.string().regex(regexAllow).min(2).max(255).required(),
  complement: Joi.string().regex(regexAllow).min(2).max(255).required(),
  neighbourhood: Joi.string().regex(regexAllow).min(2).max(255).required(),
  city: Joi.string().regex(regexAllow).min(2).max(255).required(),
  district: Joi.string().regex(regexAllow).min(2).max(255).required(),
  country: Joi.string().regex(regexAllow).min(2).max(3).required(),
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
