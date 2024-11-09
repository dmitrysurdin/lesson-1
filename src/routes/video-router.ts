import { Router } from 'express';
import { getVideosController } from '../videos/controllers/getVideosController';
import { findVideoController } from '../videos/controllers/findVideoController';
import { createVideoController } from '../videos/controllers/createVideoController';
import { updateVideoController } from '../videos/controllers/updateVideoController';
import { deleteVideoController } from '../videos/controllers/deleteVideoController';

export const videosRouter = Router();

videosRouter.get('/', getVideosController);
videosRouter.get('/:id', findVideoController);
videosRouter.post('/', createVideoController);
videosRouter.put('/:id', updateVideoController);
videosRouter.delete('/:id', deleteVideoController);
