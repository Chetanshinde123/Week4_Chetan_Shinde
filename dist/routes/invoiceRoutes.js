"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invoiceController_1 = require("../controller/invoiceController");
const router = (0, express_1.Router)();
router.post('/', invoiceController_1.createInvoiceHandler);
router.get('/', invoiceController_1.getInvoicesHandler);
exports.default = router;
