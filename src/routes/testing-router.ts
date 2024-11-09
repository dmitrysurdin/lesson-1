import { Router } from 'express';
import { clearVideosController } from '../videos/controllers/clearVideosController';

export const testingRouter = Router();

testingRouter.delete('/all-data', clearVideosController);
