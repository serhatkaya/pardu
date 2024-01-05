import express, { Request, Response } from 'express';

const router = express.Router();

export const getUsers = (req: Request, res: Response) => {
  res.send('List of users');
};

router.get('/', getUsers);

export default router;
