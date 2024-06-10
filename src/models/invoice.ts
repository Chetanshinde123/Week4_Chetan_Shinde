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
  
import { DataTypes, Model } from 'sequelize';
import sequelize from "../postgresDB/pgConfig";

class Invoice extends Model {
  public id!: string;
  public organizationId!: string;
  public invoiceDate!: Date;
  public invoiceDueDate!: Date;
  public invoiceAmount!: number;
  // Other fields...
}

Invoice.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  organizationId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  invoiceDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  invoiceDueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  invoiceAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  // Other fields...
}, {
  sequelize,
  modelName: 'Invoice',
});

export default Invoice;
