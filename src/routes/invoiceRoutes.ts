// import { Router } from 'express';
// import * as invoiceController from '../controller/invoiceController';

// const router = Router();

// router.post('/', invoiceController.createInvoice);
// // router.get('/', invoiceController.getInvoices);

// // Other routes...

// export default router;


import { Router } from 'express';
import { createInvoiceHandler , getInvoicesHandler  } from '../controller/invoiceController';

const router = Router();

router.post('/', createInvoiceHandler);
router.get('/', getInvoicesHandler);

export default router;
