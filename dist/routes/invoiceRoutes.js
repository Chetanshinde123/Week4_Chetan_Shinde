"use strict";
// import { Router } from 'express';
// import * as invoiceController from '../controller/invoiceController';
Object.defineProperty(exports, "__esModule", { value: true });
// const router = Router();
// router.post('/', invoiceController.createInvoice);
// // router.get('/', invoiceController.getInvoices);
// // Other routes...
// export default router;
const express_1 = require("express");
const invoiceController_1 = require("../controller/invoiceController");
const router = (0, express_1.Router)();
router.post('/', invoiceController_1.createInvoiceHandler);
router.get('/', invoiceController_1.getInvoicesHandler);
exports.default = router;
