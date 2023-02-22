import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw new Error('Invalid user ID');
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
