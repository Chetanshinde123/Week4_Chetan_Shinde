"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const organizationRoutes_1 = __importDefault(require("./routes/organizationRoutes"));
const customerRoutes_1 = __importDefault(require("./routes/customerRoutes"));
// import invoiceRoutes from "./routes/invoiceRoutes";
// import paymentRoutes from "./routes/paymentRoutes";
const sowRoutes_1 = __importDefault(require("./routes/sowRoutes"));
const sowPaymentPlanRoutes_1 = __importDefault(require("./routes/sowPaymentPlanRoutes"));
require("./controller/sowPaymentPlanScheduler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
app.use("/organization", organizationRoutes_1.default);
app.use("/customer", customerRoutes_1.default);
// app.use("/invoices", invoiceRoutes);
// app.use("/payments", paymentRoutes);
app.use("/sows", sowRoutes_1.default);
app.use("/sow-payment-plans", sowPaymentPlanRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Root Route");
});
app.get("/organization", (req, res) => {
    res.send("Organization Route");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
// import express from 'express';
// import organizationRoutes from './routes/organizationRoutes';
// const app = express();
// const PORT = process.env.PORT || 8000;
// app.use(express.json());
// app.use('/organizations', organizationRoutes);
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// export default app;
