import { Request, Response, NextFunction } from "express";

export const verifyRole = (roles: Array<'student' | 'teacher'>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return ;
    }

    if (!roles.includes(req.user.role)) {
      res.status(403).json({ message: "Forbidden: insufficient role" });
      return;
    }

    next();
  };
};
