// import { Model, DataTypes, Sequelize } from "sequelize";
// import sequelize from "../postgresDB/pgConfig";

// class SOWPaymentPlan extends Model {
//   public id!: string;
//   public sowId!: string;
//   public customerId!: string;
//   public plannedInvoiceDate!: Date;
//   public totalActualAmount!: number;
// }

// SOWPaymentPlan.init(
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue : DataTypes.UUIDV4,
//       primaryKey: true
//     },
//     sowId: {
//       type: DataTypes.UUID,
//       allowNull: false,
//       references: {
//         model: "Sow",
//         key: "id"
//       }
//     },
//     customerId: {
//       type: DataTypes.UUID,
//       allowNull: false,
//       references: {
//         model: "Customer",
//         key: "id"
//       }
//     },
//     plannedInvoiceDate: {
//       type: DataTypes.DATE,
//       allowNull: false
//     },
//     totalActualAmount: {
//       type: DataTypes.FLOAT,
//       allowNull: false
//     }
//   },

//   {
//     sequelize,
//     tableName: "SOWPaymentPlan"
//   }
// );

// export default SOWPaymentPlan;


import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";

class SOWPaymentPlan extends Model {
  public id!: string;
  public sowId!: string;
  public customerId!: string;
  public plannedInvoiceDate!: Date;
  public totalActualAmount!: number;
}

SOWPaymentPlan.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    sowId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Sow",
        key: "id",
      },
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Customer",
        key: "id",
      },
    },
    plannedInvoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalActualAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "SOWPaymentPlan",
    timestamps : false
  }
);

export default SOWPaymentPlan;
