import Organization from "./organization";
import Customer from "./customer";
import Invoice from "./invoice";
import Sow from "./sow";
import SOWPaymentPlan from "./sowPaymentPlan";
import SowPaymentPlanLineItem from "./sowPaymentPlanLineItems";

// ------------- Customer associations ----------------
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



SOWPaymentPlan.belongsTo(Customer, { foreignKey: 'customerId' });
Customer.hasMany(SOWPaymentPlan, { foreignKey: 'customerId' });


// SowPaymentPlanLineItem.belongsTo(Sow, { foreignKey: 'sowId' });
// Sow.hasMany(SowPaymentPlanLineItem, { foreignKey: 'sowId' });

// SowPaymentPlanLineItem.belongsTo(SOWPaymentPlan, { foreignKey: 'sowPaymentPlanId' });
// SOWPaymentPlan.hasMany(SowPaymentPlanLineItem, { foreignKey: 'sowPaymentPlanId' });

export { Organization, Customer, Invoice, Sow, SOWPaymentPlan, SowPaymentPlanLineItem };
