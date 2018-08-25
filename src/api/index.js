import express from 'express';
import { songRouter } from './resources/songs';
export const restRouter = express.Router();

restRouter.use('/songs', songRouter);