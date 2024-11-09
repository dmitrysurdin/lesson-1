import { Request, Response } from 'express';
import { db } from '../db/db';
import { validateVideoFields } from '../validation';

export const updateVideoController = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const video = req.body;

  const errors = validateVideoFields(video);

  if (errors.length) {
    res
      .status(400)
      .json(errors);
  }

  const isUpdated = db.update(id, video);

  if (isUpdated) {
    res.sendStatus(204);

    return;
  }

  res.sendStatus(404);
};