import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import Joi from "joi";
import EntityNotFoundError from "../errors/EntityNotFoundError";
export default function errorMiddleware(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof Joi.ValidationError) {
    res.status(400).send(err.message);
  }
  if (err instanceof EntityNotFoundError) {
    res.status(404).send(err.message);
  }
}
