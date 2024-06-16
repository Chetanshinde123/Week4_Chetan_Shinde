"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class Customer extends sequelize_1.Model {
}
Customer.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    organizationId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Organization",
            key: "id"
        }
    },
    msaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    msaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    legalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    ndaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    shortname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    ndaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    ndaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    addressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    isNdaSigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    isMsaSigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    msaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    timestamps: false,
    tableName: "Customer"
});
exports.default = Customer;
