"use strict";
// import { Request, Response } from 'express';
// import * as invoiceService from '../services/invoiceService';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoicesHandler = exports.createInvoiceHandler = void 0;
const invoiceService_1 = require("../services/invoiceService");
const createInvoiceHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield (0, invoiceService_1.createInvoice)(req, res);
        res.status(201).json(invoice);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createInvoiceHandler = createInvoiceHandler;
const getInvoicesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield (0, invoiceService_1.getInvoices)();
        res.status(200).json(invoices);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getInvoicesHandler = getInvoicesHandler;
