"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const customer_1 = __importDefault(require("./customer"));
class Invoice extends sequelize_1.Model {
}
Invoice.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    totalInvoiceValue: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    sowId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Sow",
            key: "id",
        },
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    invoiceSentOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Customer",
            key: "id",
        },
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: "Invoice",
    timestamps: false
});
customer_1.default.hasMany(Invoice, { foreignKey: "customerId" });
Invoice.belongsTo(customer_1.default, { foreignKey: "customerId" });
exports.default = Invoice;
