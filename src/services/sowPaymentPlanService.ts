import { SOWPaymentPlan } from "../models";

interface SOWPaymentPlanAttributes {
  id: string;
  sowId: string;
  customerId: string;
  plannedInvoiceDate: Date;
  totalActualAmount: number;
}


export const createSOWPaymentPlans = async (data: SOWPaymentPlanAttributes) => {
  try {
    const newOrganization = await SOWPaymentPlan.create(data as any);
    console.log("Data added");
    return newOrganization;
  } catch (error: any) {
    console.log("Data not added");
    throw new Error(error.message);
  }
};


export const getSOWPaymentPlans = async () => {
  return await SOWPaymentPlan.findAll();
};
