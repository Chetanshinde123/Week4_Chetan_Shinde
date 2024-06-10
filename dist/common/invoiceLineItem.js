"use strict";
module.exports = (sequelize, DataTypes) => {
    const InvoiceLineItem = sequelize.define('InvoiceLineItem', {
        id: { type: DataTypes.STRING, primaryKey: true },
        invoiceId: DataTypes.STRING,
        orderNo: DataTypes.STRING,
        particular: DataTypes.STRING,
        rate: DataTypes.FLOAT,
        unit: DataTypes.INTEGER,
        total: DataTypes.FLOAT
    }, {});
    InvoiceLineItem.associate = function (models) {
        InvoiceLineItem.belongsTo(models.Invoice, { foreignKey: 'invoiceId' });
    };
    return InvoiceLineItem;
};
