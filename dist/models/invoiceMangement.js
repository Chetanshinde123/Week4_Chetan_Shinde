"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceMangement = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
// interface PaymentMangementAttributes {
//     id: string,
//     PaymentDate: string,
//     ForExAmount: string,
//     IndianAmount: number,
//     InvoiceId: string,
//     isFullPayment: string,
//     BankPayment: string,
//     Details: string,
// }
class invoiceMangement extends sequelize_1.Model {
}
exports.invoiceMangement = invoiceMangement;
invoiceMangement.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    PaymentDate: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ForExAmount: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    InvoiceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    IndianAmount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    isFullPayment: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    BankPayment: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Details: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'InvoiceMangement',
    timestamps: false
});
