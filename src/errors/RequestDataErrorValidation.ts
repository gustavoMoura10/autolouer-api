import Joi from "joi";
import ApplicationErrorHandler from "./ApplicationErrorHandler";
import HttpStatusCode from "../enums/HttpStatusCode";

export default class RequestDataErrorValidation extends ApplicationErrorHandler {
  constructor(message: string) {
    super(message, HttpStatusCode.BAD_REQUEST);
  }
}
