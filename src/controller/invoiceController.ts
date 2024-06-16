// import { Request, Response } from 'express';
// import * as invoiceService from '../services/invoiceService';

// export const createInvoice = async (req: Request, res: Response) => {
//   try {
//     const invoice = await invoiceService.createInvoice(req.body);
//     res.status(201).json(invoice);
//   } catch (error : any) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const getInvoices = async (req: Request, res: Response) => {
//   try {
//     const invoices = await invoiceService.getInvoices();
//     res.status(200).json(invoices);
//   } catch (error : any) {
//     res.status(500).json({ message: error.message });
//   }
// };


import { Request, Response } from 'express';
import { createInvoice,getInvoices } from '../services/invoiceService';

export const createInvoiceHandler = async (req: Request, res: Response) => {
  try {
    const invoice = await createInvoice(req,res);
    res.status(201).json(invoice);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getInvoicesHandler = async (req: Request, res: Response) => {
  try {
    const invoices = await getInvoices();
    res.status(200).json(invoices);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
