import Organization from "./organization";
import Customer from "./customer";
import Invoice from "./invoice";
import Payment from "./payment";
import Sow from "./sow";
import SOWPaymentPlan from "./sowPaymentPlan";

// Define associations here
Organization.hasMany(Customer, { foreignKey: "organizationId" });
Customer.belongsTo(Organization, { foreignKey: "organizationId" });

// Organization.hasMany(Invoice, { foreignKey: "organizationId" });
// Invoice.belongsTo(Organization, { foreignKey: "organizationId" });

// Invoice.hasMany(Payment, { foreignKey: "invoiceId" });
// Payment.belongsTo(Invoice, { foreignKey: "invoiceId" });

Organization.hasMany(Sow, { foreignKey: "organizationId" });
Customer.hasMany(Sow, { foreignKey: "customerId" });
Sow.belongsTo(Organization, { foreignKey: "organizationId" });
Sow.belongsTo(Customer, { foreignKey: "customerId" });

// -------------- SOWPaymentPlan Association ----------------------
Customer.hasMany(SOWPaymentPlan, { foreignKey: "customerId" });
Sow.hasMany(SOWPaymentPlan, { foreignKey: "sowId" });
SOWPaymentPlan.belongsTo(Customer, { foreignKey: "customerId" });
SOWPaymentPlan.belongsTo(Sow, { foreignKey: "sowId" });

// Export models
export { Organization, Customer, Invoice, Payment, Sow, SOWPaymentPlan };