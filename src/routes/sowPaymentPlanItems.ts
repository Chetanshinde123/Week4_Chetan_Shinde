import { Router } from 'express';
import { Request, Response } from "express";
import * as sowPaymentPlanItems from '../controller/sowPaymentPlanItems';

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    
    try {
        const invoice = await sowPaymentPlanItems.genInvoice(req, res)
        console.log('Sow Payment genrated succesfully')
        res.send(invoice);
    } catch (err) {
        console.error('Error in Payment genration', err);
        res.status(500).send('Error in Payment genration');
    }
})

export default router;

