"use strict";
// import Invoice from "../models/invoice";
// import { SOWPaymentPlan } from "../models";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInvoice = exports.getInvoices = void 0;
// import { Request, Response } from "express";
// async function createInvoice(req: Request, res: Response) {
//   try {
//     console.log(req.params);
//     const client = await SOWPaymentPlan.findAll({
//       where: {
//         customerId: req.body.customerId
//       }
//     });
//     const date = new Date();
//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     let currentDate = `${year}-${month}-${day}`;
//     let fixDate = "2024-10-10";
//     console.log(currentDate);
//     const invoice = await matchDateIvoice(client, fixDate);
//     res.send(invoice);
//   } catch (error) {
//     console.error("Error in genrate invoice:", error);
//     return error;
//   }
// }
// async function matchDateIvoice(client: any, date: any) {
//   const invoices = [];
//   for (const element of client) {
//     if (element.PlannedInvoiceDate === date) {
//       const invoice = await Invoice.create({
//         id: String,
//         totalInvoiceValue: element.TotalActualAmount,
//         sowId: element.sowId,
//         status: "Drafted",
//         invoiceSentOn: element.PlannedInvoiceDate,
//         customerId: element.customerId
//       });
//       invoices.push(invoice.dataValues);
//     }
//   }
//   return invoices;
// }
// export { createInvoice };
const invoice_1 = __importDefault(require("../models/invoice"));
const sowPaymentPlan_1 = __importDefault(require("../models/sowPaymentPlan"));
function createInvoice(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.params);
            const client = yield sowPaymentPlan_1.default.findAll({
                where: {
                    customerId: req.body.customerId,
                },
            });
            const fixDate = new Date("2024-10-10").toISOString().split("T")[0]; // Adjust the fixed date format
            const invoice = yield matchDateInvoice(client, fixDate);
            res.send(invoice);
        }
        catch (error) {
            console.error("Error in generate invoice:", error);
            res.status(500).send("Internal Server Error");
        }
    });
}
exports.createInvoice = createInvoice;
function matchDateInvoice(client, date) {
    return __awaiter(this, void 0, void 0, function* () {
        const invoices = [];
        for (const element of client) {
            const plannedInvoiceDate = new Date(element.plannedInvoiceDate).toISOString().split("T")[0];
            if (plannedInvoiceDate === date) {
                const invoice = yield invoice_1.default.create({
                    totalInvoiceValue: element.totalActualAmount,
                    sowId: element.sowId,
                    status: "Drafted",
                    invoiceSentOn: element.plannedInvoiceDate,
                    customerId: element.customerId,
                });
                invoices.push(invoice.dataValues);
            }
        }
        return invoices;
    });
}
const getInvoices = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield invoice_1.default.findAll();
});
exports.getInvoices = getInvoices;
