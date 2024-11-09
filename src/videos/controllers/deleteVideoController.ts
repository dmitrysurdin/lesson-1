import { Request, Response } from 'express';
import { db } from '../db/db';

export const deleteVideoController = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const isDeleted = db.remove(id);

  if (!isDeleted) {
    res.sendStatus(404);
  }

  res.sendStatus(204);
};