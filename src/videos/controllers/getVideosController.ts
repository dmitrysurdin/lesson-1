import { Request, Response } from 'express';
import { db } from '../db/db';

export const getVideosController = (req: Request, res: Response) => {
  const videos = db.get();

  res
    .status(200)
    .json(videos);
};