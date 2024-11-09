import { Request, Response } from 'express';
import { Video } from '../video.types';
import { db } from '../db/db';
import { validateVideoFields } from '../validation';

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

export const createVideoController = (req: Request, res: Response) => {
  const newVideo: Video = {
    ...req.body,
    createdAt: new Date().toISOString(),
    id: Math.floor(Date.now() + Math.random()),
    canBeDownloaded: req.body?.canBeDownloaded ?? false,
    minAgeRestriction: req.body?.minAgeRestriction ?? null,
    publicationDate: req.body?.publicationDate ?? new Date(Date.now() + ONE_DAY_IN_MS).toISOString()
  };

  const errorsMessages = validateVideoFields(newVideo);

  if (errorsMessages.length) {
    res
      .status(400)
      .json({ errorsMessages });
  }

  db.add(newVideo);

  res
    .status(201)
    .json(newVideo);
};