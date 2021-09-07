export class AppError {
  public id: number;
  public errorCode: string;
  public message: string;
  public statusCode: number;

  constructor(
    id = 0,
    message: string = "",
    errorCode: string = "",
    statusCode: number = 400
  ) {
    this.id = id;
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}
