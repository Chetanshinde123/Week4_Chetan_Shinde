"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class Payment extends sequelize_1.Model {
}
Payment.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    invoiceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    paymentDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    paymentAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    // Other fields...
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Payment',
});
exports.default = Payment;
