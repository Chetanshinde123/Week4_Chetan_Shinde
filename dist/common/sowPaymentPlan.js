"use strict";
module.exports = (sequelize, DataTypes) => {
    const SOWPaymentPlan = sequelize.define('SOWPaymentPlan', {
        id: { type: DataTypes.STRING, primaryKey: true },
        sowId: DataTypes.STRING,
        customerId: DataTypes.STRING,
        plannedInvoiceDate: DataTypes.DATE,
        totalActualAmount: DataTypes.FLOAT
    }, {});
    SOWPaymentPlan.associate = function (models) {
        SOWPaymentPlan.belongsTo(models.SOW, { foreignKey: 'sowId' });
    };
    return SOWPaymentPlan;
};
