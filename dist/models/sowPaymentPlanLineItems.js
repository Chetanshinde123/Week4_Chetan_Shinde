"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class PayementPlanLineItems extends sequelize_1.Model {
}
PayementPlanLineItems.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    sowId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Sow",
            key: "id"
        }
    },
    SOWPaymentPlanId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "SOWPaymentPlan",
            key: "id"
        }
    },
    OrderId: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    Particular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Rate: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    Unit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    Total: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: "PayementPlanLineItems"
});
exports.default = PayementPlanLineItems;
