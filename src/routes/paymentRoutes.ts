import { Router } from 'express';
import { Request, Response } from "express";
import * as paymentController from '../controller/paymentController';

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    try {
      await paymentController.createPayment(req, res);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;
