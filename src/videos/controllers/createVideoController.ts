import { Request, Response } from 'express';
import { Video } from '../video.types';
import { db } from '../db/db';
import { validateVideoFields } from '../validation';

export const createVideoController = (req: Request, res: Response) => {
  const newVideo: Video = {
    ...req.body,
    createdAt: new Date().toISOString(),
    id: Math.floor(Date.now() + Math.random()),
    canBeDownloaded: req.body?.canBeDownloaded ?? false,
    minAgeRestriction: req.body?.minAgeRestriction ?? null,
    publicationDate: req.body?.publicationDate ?? new Date().toISOString()
  };

  const errors = validateVideoFields(newVideo);

  if (errors.length) {
    res
      .status(400)
      .json(errors);
  }

  db.add(newVideo);

  res
    .status(201)
    .json(newVideo);
};