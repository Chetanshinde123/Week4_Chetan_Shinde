import { DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";

class Invoice extends Model {
  public id!: string;
  public totalInvoiceValue!: string;
  public sowId!: string;
  public status!: string;
  public invoiceSentOn!: string;
  public customerId!: string;
  public paymentReceivedOn!: string;
  public invoiceVersionNumber!: string;
}

Invoice.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    totalInvoiceValue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sowId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Sow",
        key: "id"
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoiceSentOn: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Customer",
        key: "id"
      }
    },
    paymentReceivedOn: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoiceVersionNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Invoice"
  }
);

export default Invoice;
