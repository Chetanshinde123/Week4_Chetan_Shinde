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
