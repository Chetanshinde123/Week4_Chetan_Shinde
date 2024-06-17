import { Request, Response } from "express";
import { invoiceMangement } from "../models/invoiceMangement";
import { Invoice } from "../models";


async function paymentStatusUPdate(req: Request, res: Response) {
    try {
        const invoiceData = await Invoice.findOne({
            where: {
                id: req.body.id
            }
        })
        const updatedpaymentinvoice =await updatePayment(invoiceData);
        console.log(updatedpaymentinvoice)
        res.json(updatedpaymentinvoice)
    } catch (error) {
        console.error('Error in update payment:', error);
        return error;
    }
}


async function updatePayment(data: any) {
    try {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        console.log('month is ' + month);
        let currentDate = `${year}-${month}-${day}`;
        const updatePaymentInvoice = await invoiceMangement.create({
            PaymentDate: currentDate,
            ForExAmount: data.totalInvoiceValue,
            IndianAmount: data.totalInvoiceValue,
            InvoiceId: data.id,
            isFullPayment: "Done",
            BankPayment: "" ,
            Details: "",
        })
        return updatePaymentInvoice
    } catch (error) {
        console.error('Error in update payment:', error);
        return error;
    }
}

export { paymentStatusUPdate }