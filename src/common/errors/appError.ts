export class AppError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly title: string,
    public readonly detail: string,
    public readonly errors?: Record<string, string[]>
  ) {
    super(detail);
  }

  static notFound(resource: string) {
    return new AppError(404, "Not Found", `${resource} was not found.`);
  }

  static forbidden(message = "Access denied.") {
    return new AppError(403, "Forbidden", message);
  }

  static unprocessable(errors: Record<string, string[]>) {
    return new AppError(422, "Unprocessable Entity", "Validation failed.", errors);
  }
}
