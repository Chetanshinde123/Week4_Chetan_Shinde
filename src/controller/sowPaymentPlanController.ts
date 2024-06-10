// import { Request, Response } from 'express';
// import * as SOWPaymentPlan from "../services/SOWPaymentPlan"

// export const createSOWPaymentPlans = async (req: Request, res: Response) => {
//   try {
//     const sow = await SOWPaymentPlan.createSOWPaymentPlans(req.body);
//     res.status(201).json(sow);
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const getSows = async (req: Request, res: Response) => {
//   try {
//     const sows = await SOWPaymentPlan.getSows();
//     res.status(200).json(sows);
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Other CRUD operations...

// controllers/sowPaymentPlanController.ts
import { Request, Response } from 'express';
import * as sowPaymentPlanService from '../services/sowPaymentPlanService';

export const createSOWPaymentPlan = async (req: Request, res: Response) => {
  try {
    const paymentPlan = await sowPaymentPlanService.createSOWPaymentPlans();
    res.status(201).json(paymentPlan);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};


// export const getSOWPaymentPlans = async (req: Request, res: Response) => {
//   try {
//     const paymentPlans = await sowPaymentPlanService.getSOWPaymentPlans();
//     res.status(200).json(paymentPlans);
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };
