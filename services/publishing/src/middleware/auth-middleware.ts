import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { logger } from '../utils/logger';

/**
 * JWT Authentication Middleware
 */

interface JWTPayload {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        role: string;
      };
    }
  }
}

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    logger.warn('Authentication failed: No token provided');
    res.status(401).json({
      success: false,
      error: 'Authentication required',
    });
    return;
  }

  try {
    const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
    const payload = jwt.verify(token, jwtSecret) as JWTPayload;

    req.user = {
      id: payload.id,
      email: payload.email,
      role: payload.role,
    };

    logger.debug('User authenticated', {
      userId: payload.id,
      role: payload.role,
    });

    next();
  } catch (error) {
    logger.warn('Authentication failed: Invalid token', {
      error: (error as Error).message,
    });

    res.status(403).json({
      success: false,
      error: 'Invalid or expired token',
    });
  }
}

/**
 * Role-based authorization middleware
 */
export function authorizeRoles(...allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({
        success: false,
        error: 'Authentication required',
      });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      logger.warn('Authorization failed: Insufficient permissions', {
        userId: req.user.id,
        userRole: req.user.role,
        requiredRoles: allowedRoles,
      });

      res.status(403).json({
        success: false,
        error: 'Insufficient permissions',
      });
      return;
    }

    next();
  };
}
