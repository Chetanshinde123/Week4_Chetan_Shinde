import { Router } from 'express';
import { createInvoiceHandler , getInvoicesHandler  } from '../controller/invoiceController';

const router = Router();

router.post('/', createInvoiceHandler);
router.get('/', getInvoicesHandler);

export default router;
