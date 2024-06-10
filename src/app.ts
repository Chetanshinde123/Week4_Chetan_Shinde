import express, { Request, Response } from "express";
import organizationRoutes from "./routes/organizationRoutes";
import customerRoutes from "./routes/customerRoutes";
// import invoiceRoutes from "./routes/invoiceRoutes";
// import paymentRoutes from "./routes/paymentRoutes";
import sowRoutes from "./routes/sowRoutes";
import sowPaymentPlanRoutes from "./routes/sowPaymentPlanRoutes"
import './controller/sowPaymentPlanScheduler';


const app = express();

app.use(express.json());

const PORT = 8000;

app.use("/organization", organizationRoutes);
app.use("/customer", customerRoutes);
// app.use("/invoices", invoiceRoutes);
// app.use("/payments", paymentRoutes);
app.use("/sows", sowRoutes);
app.use("/sow-payment-plans", sowPaymentPlanRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Root Route");
});

app.get("/organization", (req: Request, res: Response) => {
  res.send("Organization Route");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
