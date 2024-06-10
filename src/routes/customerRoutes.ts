// import express, { Request, Response } from 'express';
// const router = express.Router();

// // ----------- Organization -----------------
// import { createOrganization, getOrganizations } from '../controllers/organizationController';

// router.post('/organization', (req: Request, res: Response) => createOrganization(req, res));
// router.get('/organization', (req: Request, res: Response) => getOrganizations(req, res));

// // ----------- Customer -----------------
// import { createCustomer, getCustomers } from '../controllers/customerController';

// router.post('/customer', (req: Request, res: Response) => createCustomer(req, res));
// router.get('/customer', (req: Request, res: Response) => getCustomers(req, res));

// // ----------- Sow -----------------
// import { createSOW, getSOWs } from '../controllers/sowController';

// router.post('/sow', (req: Request, res: Response) => createSOW(req, res));
// router.get('/sow', (req: Request, res: Response) => getSOWs(req, res));

// // ----------- Invoice -----------------
// import { createInvoice, getInvoices } from '../controllers/invoiceController';

// router.post('/invoice', (req: Request, res: Response) => createInvoice(req, res));
// router.get('/invoice', (req: Request, res: Response) => getInvoices(req, res));

// // ----------- Payment -----------------
// import { createPayment, getPayments } from '../controllers/paymentController';

// router.post('/payment', (req: Request, res: Response) => createPayment(req, res));
// router.get('/payment', (req: Request, res: Response) => getPayments(req, res));

// export default router;

import { Router } from 'express';
import * as customerController from '../controller/customerController';

const router = Router();

router.post('/', customerController.createCustomer);
router.get('/', customerController.getCustomers);

// Other routes...

export default router;
