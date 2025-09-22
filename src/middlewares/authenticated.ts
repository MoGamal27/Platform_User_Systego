import { Request, Response, NextFunction, RequestHandler } from 'express';
import { UnauthorizedError } from "../Errors/unauthorizedError";
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      currentUser?: jwt.JwtPayload;
    }
  }
}

export function authenticated(req: Request, res: Response, next: NextFunction) {
   const authHeader = req.headers['Authorization'] || req.headers['authorization'];
    if(!authHeader) {
        
        return next(new UnauthorizedError('No token provided'));
    }
   const token = (authHeader as string).split(' ')[1];

   try {
    const currentUser = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as jwt.JwtPayload;
    req.user = currentUser;
    next();
  } catch (err) {
  throw new UnauthorizedError("Invalid token");
  }
};



