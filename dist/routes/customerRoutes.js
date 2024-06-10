"use strict";
// import express, { Request, Response } from 'express';
// const router = express.Router();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = require("express");
const customerController = __importStar(require("../controller/customerController"));
const router = (0, express_1.Router)();
router.post('/', customerController.createCustomer);
router.get('/', customerController.getCustomers);
// Other routes...
exports.default = router;
