"use strict";
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
exports.paymentStatusUPdate = void 0;
const invoiceMangement_1 = require("../models/invoiceMangement");
const models_1 = require("../models");
function paymentStatusUPdate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invoiceData = yield models_1.Invoice.findOne({
                where: {
                    id: req.body.id
                }
            });
            const updatedpaymentinvoice = yield updatePayment(invoiceData);
            console.log(updatedpaymentinvoice);
            res.json(updatedpaymentinvoice);
        }
        catch (error) {
            console.error('Error in update payment:', error);
            return error;
        }
    });
}
exports.paymentStatusUPdate = paymentStatusUPdate;
function updatePayment(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            console.log('month is ' + month);
            let currentDate = `${year}-${month}-${day}`;
            const updatePaymentInvoice = yield invoiceMangement_1.invoiceMangement.create({
                PaymentDate: currentDate,
                ForExAmount: data.totalInvoiceValue,
                IndianAmount: data.totalInvoiceValue,
                InvoiceId: data.id,
                isFullPayment: "Done",
                BankPayment: "",
                Details: "",
            });
            return updatePaymentInvoice;
        }
        catch (error) {
            console.error('Error in update payment:', error);
            return error;
        }
    });
}
