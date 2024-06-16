import { DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import Customer from "./customer";

class Invoice extends Model {
  public id!: string;
  public totalInvoiceValue!: number;
  public sowId!: string;
  public status!: string;
  public invoiceSentOn!: Date;
  public customerId!: string;
}

Invoice.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    totalInvoiceValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sowId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Sow",
        key: "id",
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invoiceSentOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Customer",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Invoice",
    timestamps : false
  }
);

Customer.hasMany(Invoice, { foreignKey: "customerId" });
Invoice.belongsTo(Customer, { foreignKey: "customerId" });

export default Invoice;
