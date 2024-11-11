import { Request, Response } from 'express';
import { db } from '../db/db';

export const findVideoController = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = db.find(id);

  if (!product) {
    res.sendStatus(404);

    return;
  }

  res
    .status(200)
    .json(product);
};
