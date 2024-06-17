import { Request, Response } from "express";
import * as paymentService from "../services/paymentService";


export const createPayment = async (req: Request, res: Response) => {
    try {
        const updatedPaymentInvoice = await paymentService.paymentStatusUPdate(req,res);
        res.status(200).json(updatedPaymentInvoice);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// export const paymentStatusUpdate = async (req: Request, res: Response)=>{
//     const invoice: any = await paymentStatusUPdate(req, res)
//     return invoice
// }