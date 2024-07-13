import HttpStatusCode from "../enum/HttpStatusCode";
import ApplicationErrorHandler from "./ApplicationErrorHandler";

export default class EntityNotFoundError extends ApplicationErrorHandler {
  constructor(message: string) {
    super(message, HttpStatusCode.NOT_FOUND);
  }
}
