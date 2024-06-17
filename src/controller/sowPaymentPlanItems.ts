import { createSOWPaymentPlan, getSOWPaymentPlan } from './sowPaymentPlanController';
import { Request, Response } from 'express';
import * as sowPaymentPlanItems from '../services/sowPaymentPlanItems';

export const genInvoice = async (req: Request, res: Response) => {
  try {
    const sow = await sowPaymentPlanItems.createSOWPaymentPlanItems(req,res);
    res.status(201).json(sow);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};



