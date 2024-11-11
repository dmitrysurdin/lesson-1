import { Request, Response } from 'express';
import { db } from '../db/db';

export const clearVideosController = (req: Request, res: Response) => {
  db.clearDb()

  res.sendStatus(204)
};
