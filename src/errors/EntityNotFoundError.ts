export default class EntityNotFoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}
