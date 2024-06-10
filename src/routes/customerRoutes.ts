import { Router } from 'express';
import * as customerController from '../controller/customerController';

const router = Router();

router.post('/', customerController.createCustomer);
router.get('/', customerController.getCustomers);



export default router;
