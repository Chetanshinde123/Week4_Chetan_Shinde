// import { Sow, SOWPaymentPlan } from '../models';
// import { Op } from 'sequelize';

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

import { SOWPaymentPlan } from "../models";

interface SOWPaymentPlanAttributes {
  id: string;
  sowId: string;
  customerId: string;
  plannedInvoiceDate: Date;
  totalActualAmount: number;
}

const getMonthsDifference = (startDate: Date, endDate: Date): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return (
    end.getMonth() -
    start.getMonth() +
    1 +
    12 * (end.getFullYear() - start.getFullYear())
  );
};

export const createSOWPaymentPlans = async (): Promise<void> => {
  try {
    // Fetch relevant data from your database or any other source
    const Sow: any = []; // Fetch SOW data from the database

    for (const sow of Sow as any) {
      const totalMonths = getMonthsDifference(sow.validFrom, sow.validUpto);
      const monthlyPayment = sow.totalValue / totalMonths;

      const paymentPlans: SOWPaymentPlanAttributes[] = [];
      let paymentDate = new Date(sow.validFrom);

      for (let i = 0; i < totalMonths; i++) {
        paymentPlans.push({
          id: `${sow.id}-${i + 1}`,
          sowId: sow.id,
          customerId: sow.customerId,
          plannedInvoiceDate: new Date(
            paymentDate.setMonth(paymentDate.getMonth() + 1)
          ),
          totalActualAmount: monthlyPayment
        });
      }

      await SOWPaymentPlan.bulkCreate(paymentPlans as any);
    }
  } catch (error) {
    console.error("Error generating SOW payment plans:", error);
    throw error;
  }
};

export const getSOWPaymentPlans = async () => {
  return await SOWPaymentPlan.findAll();
};
