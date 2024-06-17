"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const organizationRoutes_1 = __importDefault(require("./routes/organizationRoutes"));
const customerRoutes_1 = __importDefault(require("./routes/customerRoutes"));
const invoiceRoutes_1 = __importDefault(require("./routes/invoiceRoutes"));
const paymentRoutes_1 = __importDefault(require("./routes/paymentRoutes"));
const sowRoutes_1 = __importDefault(require("./routes/sowRoutes"));
const sowPaymentPlanRoutes_1 = __importDefault(require("./routes/sowPaymentPlanRoutes"));
// import './controller/sowPaymentPlanScheduler';
const sowPaymentPlanItems_1 = __importDefault(require("./routes/sowPaymentPlanItems"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
app.use("/organization", organizationRoutes_1.default);
app.use("/customer", customerRoutes_1.default);
app.use("/invoices", invoiceRoutes_1.default);
app.use("/sows", sowRoutes_1.default);
app.use("/sow-payment-plans", sowPaymentPlanRoutes_1.default);
app.use("/sow-payment-plans-line", sowPaymentPlanItems_1.default);
app.use("/payments", paymentRoutes_1.default);
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
