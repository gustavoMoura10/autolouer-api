import Joi from "joi";
import EntityNotFoundError from "../errors/EntityNotFoundError";
import RequestDataErrorValidation from "../errors/RequestDataErrorValidation";
import { NextFunction, Request, RequestHandler, Response } from "express";
export default function validateSchemaMiddleware(
  schema: Joi.Schema<any>
): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new RequestDataErrorValidation(error.message);
    }
    next();
  };
}
