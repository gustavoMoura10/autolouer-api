import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import Joi from "joi";
import EntityNotFoundError from "../errors/EntityNotFoundError";
import ApplicationErrorHandler from "../errors/ApplicationErrorHandler";
import HttpStatusCode from "../enums/HttpStatusCode";
export default function errorMiddleware(
  err: ApplicationErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.statusCode ?? HttpStatusCode.INTERNAL_SERVER_ERROR;
  const message = err.statusCode ? err.message : "Internal Server Error";
  res.status(statusCode).send({ message });
}
