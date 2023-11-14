import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class FirstMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} en el endpoint ${req.baseUrl} recibido`);
    next();
  }
}
