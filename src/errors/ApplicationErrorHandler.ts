export default class ApplicationErrorHandler extends Error {
  public statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
  getStatusCode(): number {
    return this.statusCode;
  }
}
