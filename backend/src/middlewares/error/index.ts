import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  _: Request,
  res: Response,
  __: NextFunction,
) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode);

  const response = {
    message: err.message,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined,
  };

  return res.json(response);
};
