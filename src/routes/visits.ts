import express from 'express';
import { createVisitController } from '../controllers/visits';

const router = express.Router();

router.post('/', createVisitController);

export default router;
