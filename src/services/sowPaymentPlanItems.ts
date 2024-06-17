import { Request,Response } from "express";

import sowPaymentPlanLineItems from "../models/sowPaymentPlanLineItems";

export const createSOWPaymentPlanItems = async (req: Request, res : Response) => {
    try {
      const newOrganization = await sowPaymentPlanLineItems.create(req.body);
      console.log("Data added");
      return newOrganization;
    } catch (error: any) {
      console.log("Data not added");
      throw new Error(error.message);
    }
  };