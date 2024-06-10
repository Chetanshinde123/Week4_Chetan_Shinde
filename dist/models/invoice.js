"use strict";
// module.exports = (sequelize : any, DataTypes : any) => {
//     const Invoice = sequelize.define('Invoice', {
//       id: { type: DataTypes.STRING, primaryKey: true },
//       totalInvoiceValue: DataTypes.FLOAT,
//       sowId: DataTypes.STRING,
//       status: DataTypes.ENUM('Drafted', 'Cancelled', 'Approved'),
//       invoiceSentOn: DataTypes.DATE,
//       customerId: DataTypes.STRING,
//       paymentReceivedOn: DataTypes.DATE,
//       invoiceVersionNumber: DataTypes.INTEGER
//     }, {});
//     Invoice.associate = function(models : any) {
//       Invoice.belongsTo(models.SOW, { foreignKey: 'sowId' });
//       Invoice.belongsTo(models.Customer, { foreignKey: 'customerId' });
//     };
//     return Invoice;
//   };
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class Invoice extends sequelize_1.Model {
}
Invoice.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    organizationId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    invoiceDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    invoiceDueDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    invoiceAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    // Other fields...
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Invoice',
});
exports.default = Invoice;
