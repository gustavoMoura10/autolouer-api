import Joi, { custom } from "joi";
import validateCPFCNPJ from "../utils/validateCPFCNPJ";
import { regexPassword } from "../utils/regex";

export default class UserSchema {
  static createSchema = Joi.object({
    firstName: Joi.string().alphanum().min(2).max(100).required(),
    lastName: Joi.string().alphanum().min(2).max(100).required(),
    email: Joi.string().email().required(),
    document: Joi.string()
      .min(2)
      .max(20)
      .custom((value, helper) => {
        const validate = validateCPFCNPJ(value);
        if (!validate) {
          return helper.message({
            custom: "Wrong document value",
          });
        }
        return value;
      })
      .required(),
    password: Joi.string().regex(regexPassword).required(),
    passwordConfirmation: Joi.string()
      .regex(regexPassword)
      .equal(Joi.ref("password"))
      .required(),
    birthdate: Joi.date(),
  });
}
