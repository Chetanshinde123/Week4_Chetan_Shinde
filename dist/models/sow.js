"use strict";
// module.exports = (sequelize : any, DataTypes : any) => {
//     const SOW = sequelize.define('SOW', {
//       id: { type: DataTypes.STRING, primaryKey: true },
//       invoiceEmailAddresses: DataTypes.ARRAY(DataTypes.STRING),
//       customerId: DataTypes.STRING,
//       customerPONumber: DataTypes.STRING,
//       title: DataTypes.STRING,
//       customerSONumber: DataTypes.STRING,
//       validityPeriod: DataTypes.JSON,
//       totalValue: DataTypes.FLOAT,
//       currency: DataTypes.STRING
//     }, {});
//     SOW.associate = function(models : any) {
//       SOW.belongsTo(models.Customer, { foreignKey: 'customerId' });
//     };
//     return SOW;
//   };
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/sow.ts
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class Sow extends sequelize_1.Model {
}
Sow.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    invoiceEmailAddresses: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Customer",
            key: "id"
        }
    },
    customerPONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    customerSONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    validFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    validUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    totalValue: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: "Sow"
});
exports.default = Sow;
