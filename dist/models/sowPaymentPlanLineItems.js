"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
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
class SowPaymentPlanLineItem extends sequelize_1.Model {
}
SowPaymentPlanLineItem.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    sowPaymentPlanId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "SOWPaymentPlan",
            key: "id",
        },
    },
    sowId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Sow",
            key: "id",
        },
    },
    orderId: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
    },
    particular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rate: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    unit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "sowPaymentPlanLineItems",
    timestamps: false
});
exports.default = SowPaymentPlanLineItem;
