class CustomNotFoundError extends Error {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 404;
    this.name = "NotFoundError";

    Object.setPrototypeOf(this, CustomNotFoundError);
  }
}

export default CustomNotFoundError;
