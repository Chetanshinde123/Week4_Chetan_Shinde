"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOWPaymentPlan = exports.Sow = exports.Invoice = exports.Customer = exports.Organization = void 0;
const organization_1 = __importDefault(require("./organization"));
exports.Organization = organization_1.default;
const customer_1 = __importDefault(require("./customer"));
exports.Customer = customer_1.default;
const invoice_1 = __importDefault(require("./invoice"));
exports.Invoice = invoice_1.default;
const sow_1 = __importDefault(require("./sow"));
exports.Sow = sow_1.default;
const sowPaymentPlan_1 = __importDefault(require("./sowPaymentPlan"));
exports.SOWPaymentPlan = sowPaymentPlan_1.default;
// ------------- Customer associations ----------------
organization_1.default.hasMany(customer_1.default, { foreignKey: "organizationId" });
customer_1.default.belongsTo(organization_1.default, { foreignKey: "organizationId" });
// Organization.hasMany(Invoice, { foreignKey: "organizationId" });
// Invoice.belongsTo(Organization, { foreignKey: "organizationId" });
// Invoice.hasMany(Payment, { foreignKey: "invoiceId" });
// Payment.belongsTo(Invoice, { foreignKey: "invoiceId" });
organization_1.default.hasMany(sow_1.default, { foreignKey: "organizationId" });
customer_1.default.hasMany(sow_1.default, { foreignKey: "customerId" });
sow_1.default.belongsTo(organization_1.default, { foreignKey: "organizationId" });
sow_1.default.belongsTo(customer_1.default, { foreignKey: "customerId" });
// -------------- SOWPaymentPlan Association ----------------------
customer_1.default.hasMany(sowPaymentPlan_1.default, { foreignKey: "customerId" });
sow_1.default.hasMany(sowPaymentPlan_1.default, { foreignKey: "sowId" });
sowPaymentPlan_1.default.belongsTo(customer_1.default, { foreignKey: "customerId" });
sowPaymentPlan_1.default.belongsTo(sow_1.default, { foreignKey: "sowId" });
sowPaymentPlan_1.default.belongsTo(customer_1.default, { foreignKey: 'customerId' });
customer_1.default.hasMany(sowPaymentPlan_1.default, { foreignKey: 'customerId' });
