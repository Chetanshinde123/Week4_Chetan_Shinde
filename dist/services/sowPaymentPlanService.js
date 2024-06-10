"use strict";
// import { Sow, SOWPaymentPlan } from '../models';
// import { Op } from 'sequelize';
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
exports.getSOWPaymentPlans = exports.createSOWPaymentPlans = void 0;
// interface SOWPaymentPlanAttributes {
//   id: string;
//   sowId: string;
//   customerId: string;
//   plannedInvoiceDate: Date;
//   totalActualAmount: number;
// }
// const getMonthsDifference = (startDate: Date, endDate: Date): number => {
//   const start = new Date(startDate);
//   const end = new Date(endDate);
//   return end.getMonth() - start.getMonth() + 1 + (12 * (end.getFullYear() - start.getFullYear()));
// };
// export const createSOWPaymentPlans = async (): Promise<void> => {
//   try {
//     const sows = await Sow.findAll({
//       where: {
//         'validityPeriod.validFrom': {
//           [Op.lte]: new Date(),
//         },
//         'validityPeriod.validUpto': {
//           [Op.gte]: new Date(),
//         },
//       },
//     });
//     for (const sow of sows) {
//       const { validFrom, validUpto } = Sow.validityPeriod;
//       const totalMonths = getMonthsDifference(validFrom, validUpto);
//       const monthlyPayment = sow.totalValue / totalMonths;
//       const paymentPlans: SOWPaymentPlanAttributes[] = [];
//       let paymentDate = new Date(validFrom);
//       for (let i = 0; i < totalMonths; i++) {
//         paymentPlans.push({
//           id: `${sow.id}-${i + 1}`,
//           sowId: sow.id,
//           customerId: sow.customerId,
//           plannedInvoiceDate: new Date(paymentDate.setMonth(paymentDate.getMonth() + 1)),
//           totalActualAmount: monthlyPayment,
//         });
//       }
//       await SOWPaymentPlan.bulkCreate(paymentPlans);
//     }
//   } catch (error) {
//     console.error('Error generating SOW payment plans:', error);
//   }
// };
// services/sowPaymentPlanService.ts
const models_1 = require("../models");
const getMonthsDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (end.getMonth() -
        start.getMonth() +
        1 +
        12 * (end.getFullYear() - start.getFullYear()));
};
const createSOWPaymentPlans = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch relevant data from your database or any other source
        const Sow = []; // Fetch SOW data from the database
        for (const sow of Sow) {
            const totalMonths = getMonthsDifference(sow.validFrom, sow.validUpto);
            const monthlyPayment = sow.totalValue / totalMonths;
            const paymentPlans = [];
            let paymentDate = new Date(sow.validFrom);
            for (let i = 0; i < totalMonths; i++) {
                paymentPlans.push({
                    id: `${sow.id}-${i + 1}`,
                    sowId: sow.id,
                    customerId: sow.customerId,
                    plannedInvoiceDate: new Date(paymentDate.setMonth(paymentDate.getMonth() + 1)),
                    totalActualAmount: monthlyPayment
                });
            }
            yield models_1.SOWPaymentPlan.bulkCreate(paymentPlans);
        }
    }
    catch (error) {
        console.error("Error generating SOW payment plans:", error);
        throw error;
    }
});
exports.createSOWPaymentPlans = createSOWPaymentPlans;
const getSOWPaymentPlans = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.SOWPaymentPlan.findAll();
});
exports.getSOWPaymentPlans = getSOWPaymentPlans;
