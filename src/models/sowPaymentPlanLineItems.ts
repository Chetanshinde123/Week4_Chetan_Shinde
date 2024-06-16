import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";

interface PaymentPlanAttributes {
  id: string;
  SOWPaymentPlanId: string;
  sowId: string;
  OrderId: string;
  Particular: string;
  Rate: number;
  Unit: number;
  Total: number;
}

class PayementPlanLineItems
  extends Model<PaymentPlanAttributes>
  implements PaymentPlanAttributes
{
  public id!: string;
  public SOWPaymentPlanId!: string;
  public sowId!: string;
  public OrderId!: string;
  public Particular!: string;
  public Rate!: number;
  public Unit!: number;
  public Total!: number;
}

PayementPlanLineItems.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    sowId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Sow",
        key: "id"
      }
    },
    SOWPaymentPlanId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "SOWPaymentPlan",
        key: "id"
      }
    },
    OrderId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    Particular: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Rate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Unit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Total: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "PayementPlanLineItems"
  }
);

export default PayementPlanLineItems;
