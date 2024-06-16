"use strict";
// import { Model, DataTypes, Sequelize } from "sequelize";
// import sequelize from "../postgresDB/pgConfig";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class SOWPaymentPlan extends sequelize_1.Model {
}
SOWPaymentPlan.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    sowId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Sow",
            key: "id",
        },
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Customer",
            key: "id",
        },
    },
    plannedInvoiceDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    totalActualAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "SOWPaymentPlan",
    timestamps: false
});
exports.default = SOWPaymentPlan;
