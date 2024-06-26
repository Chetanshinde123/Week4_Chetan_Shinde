import Invoice from "../models/invoice";
import SOWPaymentPlan from "../models/sowPaymentPlan";
import { Request, Response } from "express";

async function createInvoice(req: Request, res: Response) {
  try {
    console.log(req.params);
    const client = await SOWPaymentPlan.findAll({
      where: {
        customerId: req.body.customerId
      }
    });

    const fixDate = new Date("2024-10-10").toISOString().split("T")[0]; // Adjust the fixed date format
    const invoice = await matchDateInvoice(client, fixDate);

    res.send(invoice);
  } catch (error) {
    console.error("Error in generate invoice:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function matchDateInvoice(client: any, date: string) {
  const invoices = [];

  for (const element of client) {
    const plannedInvoiceDate = new Date(element.plannedInvoiceDate)
      .toISOString()
      .split("T")[0];
    if (plannedInvoiceDate === date) {
      const invoice = await Invoice.create({
        totalInvoiceValue: element.totalActualAmount,
        sowId: element.sowId,
        status: "Drafted",
        invoiceSentOn: element.plannedInvoiceDate,
        customerId: element.customerId
      });
      invoices.push(invoice.dataValues);
    }
  }

  return invoices;
}

export const getInvoices = async () => {
  return await Invoice.findAll();
};

export { createInvoice };
