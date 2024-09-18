import HttpStatusCode from "../enums/HttpStatusCode";
import ApplicationErrorHandler from "./ApplicationErrorHandler";

export default class DatabaseConnectionError extends ApplicationErrorHandler {
  constructor(message: string) {
    super(message, HttpStatusCode.INTERNAL_SERVER_ERROR);
  }
}
