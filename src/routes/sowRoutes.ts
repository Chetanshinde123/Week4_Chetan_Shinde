import { Router } from 'express';
import * as sowController from '../controller/sowController';

const router = Router();

router.post('/', sowController.createSow);
router.get('/', sowController.getSows);

// Other routes...

export default router;
