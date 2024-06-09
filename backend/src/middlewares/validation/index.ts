import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const validateRequest =
  (schema: z.Schema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { params, query, body } = req;

    const validatedData = schema.safeParse({
      ...body,
      ...params,
      ...query,
    });

    if (!validatedData.success) {
      res.statusCode = 400;
      throw new Error(validatedData.error.errors.map((item) => item.message).join(', '));
    }

    req.query = validatedData.data;
    req.params = validatedData.data;
    req.body = validatedData.data;
    next();
  };
