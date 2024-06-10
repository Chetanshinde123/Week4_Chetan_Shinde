import { Router } from 'express';
import * as sowPaymentPlanController from '../controller/sowPaymentPlanController';

const router = Router();

router.get('/', sowPaymentPlanController.createSOWPaymentPlan);
// router.get('/', sowPaymentPlanController.getSOWPaymentPlans);

export default router;
