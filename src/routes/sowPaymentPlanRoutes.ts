import { Router } from 'express';
import * as sowPaymentPlanController from '../controller/sowPaymentPlanController';

const router = Router();

router.post('/', sowPaymentPlanController.createSOWPaymentPlan);
router.get('/', sowPaymentPlanController.getSOWPaymentPlan);

export default router;
