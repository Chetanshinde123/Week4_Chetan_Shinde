// controllers/sowPaymentPlanController.ts
import { Request, Response } from "express";
import * as sowPaymentPlanService from "../services/sowPaymentPlanService";

export const createSOWPaymentPlan = async (req: Request, res: Response) => {
  try {
    const paymentPlan = await sowPaymentPlanService.createSOWPaymentPlans(
      req.body
    );
    res.status(201).json(paymentPlan);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getSOWPaymentPlan = async (req: Request, res: Response) => {
  try {
    const paymentPlan = await sowPaymentPlanService.getSOWPaymentPlans();
    res.status(201).json(paymentPlan);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
