import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";


// interface SowPaymentPlanLineItemAttributes {
//   id: string;
//   SOWPaymentPlanId: string;
//   sowId: string;
//   OrderId: string;
//   Particular: string;
//   Rate: number;
//   Unit: number;
//   Total: number;
// }

class SowPaymentPlanLineItem
  extends Model
{
  public id!: string;
  public sowPaymentPlanId!: string;
  public sowId!: string;
  public orderId!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;
}

SowPaymentPlanLineItem.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    sowPaymentPlanId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "SOWPaymentPlan",
        key: "id",
      },
    },
    sowId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Sow",
        key: "id",
      },
    },
    orderId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    particular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "sowPaymentPlanLineItems",
    timestamps : false
  }
);



export default SowPaymentPlanLineItem;
