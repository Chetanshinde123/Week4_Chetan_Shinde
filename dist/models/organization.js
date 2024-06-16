"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class Organization extends sequelize_1.Model {
}
Organization.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    gstNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    panNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    legalOrganizationName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    contactName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    timestamps: false,
    tableName: "Organization"
});
exports.default = Organization;
